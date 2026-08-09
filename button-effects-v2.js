(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selector = '.btn';

  const style = document.createElement('style');
  style.id = 'delta-button-effects-v2';
  style.textContent = `
    .btn.delta-fx {
      --delta-fx-x: 50%;
      --delta-fx-y: 50%;
      isolation: isolate;
    }

    .btn.delta-fx::before,
    .btn.delta-fx::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
    }

    .btn.delta-fx::before {
      inset: 1px;
      opacity: 0;
      background:
        linear-gradient(90deg,
          transparent 0%,
          transparent 34%,
          rgba(255, 171, 76, .10) 43%,
          rgba(255, 118, 24, .52) 50%,
          rgba(255, 171, 76, .10) 57%,
          transparent 66%,
          transparent 100%);
      transform: translateX(-135%);
      mix-blend-mode: screen;
    }

    .btn.delta-fx::after {
      opacity: 0;
      background:
        radial-gradient(circle at var(--delta-fx-x) var(--delta-fx-y),
          rgba(255, 221, 167, .58) 0%,
          rgba(255, 149, 58, .34) 8%,
          rgba(255, 118, 24, .16) 19%,
          transparent 43%);
      transform: scale(.72);
    }

    @media (hover: hover) and (pointer: fine) {
      .btn.delta-fx:hover::before {
        opacity: 1;
        animation: delta-btn-scan .58s cubic-bezier(.2,.75,.22,1) 1;
      }

      .btn.delta-fx:hover {
        border-color: rgba(255, 136, 43, .68);
      }
    }

    .btn.delta-fx.delta-fx-confirm::after {
      animation: delta-btn-confirm .42s cubic-bezier(.12,.75,.25,1) 1;
    }

    .btn.delta-fx.delta-fx-confirm {
      box-shadow:
        inset 0 0 0 1px rgba(255, 193, 113, .28),
        0 0 0 1px rgba(255, 118, 24, .12),
        0 10px 34px rgba(255, 118, 24, .13);
    }

    @keyframes delta-btn-scan {
      0%   { transform: translateX(-135%); }
      100% { transform: translateX(135%); }
    }

    @keyframes delta-btn-confirm {
      0%   { opacity: 0; transform: scale(.62); }
      18%  { opacity: 1; }
      100% { opacity: 0; transform: scale(1.5); }
    }

    @media (prefers-reduced-motion: reduce) {
      .btn.delta-fx::before,
      .btn.delta-fx::after {
        animation: none !important;
        display: none !important;
      }
    }
  `;
  document.head.appendChild(style);

  const bind = (button) => {
    if (button.dataset.deltaFxBound === '1') return;
    button.dataset.deltaFxBound = '1';
    button.classList.add('delta-fx');

    button.addEventListener('pointermove', (event) => {
      if (reducedMotion.matches) return;
      const rect = button.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      button.style.setProperty('--delta-fx-x', `${Math.max(0, Math.min(100, x))}%`);
      button.style.setProperty('--delta-fx-y', `${Math.max(0, Math.min(100, y))}%`);
    }, { passive: true });

    button.addEventListener('click', (event) => {
      if (reducedMotion.matches) return;

      const rect = button.getBoundingClientRect();
      const clientX = event.clientX || (rect.left + rect.width / 2);
      const clientY = event.clientY || (rect.top + rect.height / 2);
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;

      button.style.setProperty('--delta-fx-x', `${Math.max(0, Math.min(100, x))}%`);
      button.style.setProperty('--delta-fx-y', `${Math.max(0, Math.min(100, y))}%`);

      button.classList.remove('delta-fx-confirm');
      void button.offsetWidth;
      button.classList.add('delta-fx-confirm');
      window.setTimeout(() => button.classList.remove('delta-fx-confirm'), 460);
    });
  };

  const bindAll = (root = document) => root.querySelectorAll(selector).forEach(bind);

  const start = () => {
    bindAll();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches?.(selector)) bind(node);
          bindAll(node);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();

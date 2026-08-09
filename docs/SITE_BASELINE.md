# DeltaProfessional_site — production baseline

Дата фиксации: 2026-08-10

## 1. Статус

Текущая сборка `deltaprof.com` считается утвержденной базой сайта перед production/SEO cleanup.

Подтверждено визуальной проверкой на desktop и mobile:

- Content v1 — PASS;
- Site Media Baseline v1 — PASS;
- Logo / Brand treatment — PASS;
- Typography Baseline Visual v2 — PASS;
- UI Scale Visual v2.2 — PASS;
- Tactical / Industrial visual direction — PASS;
- Final Polish Visual v2 — PASS;
- favicon — PASS;
- global button interaction effect — PASS.

Не делать новый редизайн без конкретной причины. Дальше изменения должны быть production-, SEO- или content-driven.

---

## 2. Инфраструктура

- Домен: `https://deltaprof.com`.
- DNS: Cloudflare.
- Hosting/deploy: Cloudflare Pages.
- GitHub: `RelSMayer/DeltaProfessional_site`.
- Production branch: `main`.
- Deploy path: GitHub -> Cloudflare Pages -> `deltaprof.com`.
- Язык публичного сайта: украинский.
- Контактный e-mail: `delta.professional.em@gmail.com`.

Canonical host: apex `deltaprof.com`.

`www.deltaprof.com` должен 301 redirect на apex с сохранением path/query.

Старый WordPress/старый хостинг не использовать как основу нового сайта.

---

## 3. Публичная архитектура

Основные страницы:

- `/` — DELTA CNC / Product;
- `/rnd/` — DELTA R&D;
- `/support/` — legacy software, support, documentation, upgrade;
- `/about/` — история DELTA Professional и continuity;
- `/delivery/` — комплектация, договор, оплата, упаковка и доставка.

Header:

`DELTA CNC · R&D · Підтримка · Про нас · Доставка · Контакти`

Footer:

- DELTA Professional;
- продукты: DELTA CNC / модернизация / поддержка;
- компания: DELTA R&D / про нас / доставка и оплата;
- Харьков, Украина;
- `delta.professional.em@gmail.com`;
- `DELTA Professional · 1995–2026`;
- `© 2026 DELTA Professional`.

---

## 4. Позиционирование

### DELTA Professional

Исторический бренд. Публичная дата начала: **1995**.

Допустимая публичная формулировка:

> Понад 6000 систем DELTA Professional було реалізовано в Україні.

Не создавать ложную точность и не заменять `реалізовано` на неподтвержденное `встановлено`.

### DELTA CNC

Новое поколение системы автоматизации промышленного швейного и вышивального оборудования.

Ключевой смысл продукта:

- промышленная швейная машина формирует стежок;
- DELTA CNC управляет координатным положением материала относительно иглы;
- XY движение синхронизируется с циклом машины;
- возможны пяльца, технологическая оснастка, шаблоны и лекала;
- можно использовать существующую совместимую машину/стол/механику после проверки;
- возможна адаптация к Siruba, Gamsy, Typical и другим совместимым моделям, но совместимость всегда проверяется по конкретной машине.

Публичный статус продукта: **разработка + практическая валидация**. Не создавать впечатление завершенного серийного продукта до завершения реального швейного теста.

### DELTA R&D

Отдельное инженерное направление:

- Embedded Systems;
- Electronics & PCB;
- Motion & Automation;
- Reverse Engineering;
- System Integration;
- Linux / Raspberry Pi / UI;
- Engineering Consulting.

DELTA CNC используется как реальный публичный full-stack case study. Не придумывать несуществующие клиентские кейсы.

---

## 5. Commercial baseline

DELTA CNC не продается через ecommerce/cart.

Коммерческая модель:

- комплектация определяется индивидуально;
- стоимость зависит от того, какое оборудование уже есть у заказчика;
- пригодная машина, стол и механические узлы могут использоваться после проверки;
- транспортная упаковка входит в согласованную стоимость оборудования;
- доставка по Украине — Нова Пошта, грузовое отделение;
- стоимость перевозки и дополнительных услуг перевозчика оплачивает получатель;
- порядок оплаты, размер предоплаты, финальный расчет, комплектация и сроки фиксируются в договоре.

Не публиковать фиксированную схему оплаты типа 50/50 без отдельного решения.

---

## 6. Legacy / Support baseline

### Browser EMB

Рекомендуемый вариант для современных Windows x64, включая Windows 10/11.

Google Drive:
`https://drive.google.com/file/d/1gbQigrAcbnMd_1GJYsS8ok0TkCjH45nM/view?usp=sharing`

### DeltaCard

Legacy-вариант для Windows XP/7 x32.

Google Drive:
`https://drive.google.com/file/d/1fzVyDPVqXa8mBTWCazmxSc-94RE60WcF/view?usp=drive_link`

DST / PEC / PCS на сайте описываются как **форматы файлов машинной вышивки**.

Legacy workflow:

`файл машинной вышивки -> Browser EMB / DeltaCard -> USB-программатор -> картридж -> DELTA Professional соответствующего поколения`.

Раздел документации пока наполняется только проверенными архивными материалами.

---

## 7. Visual v2 baseline

Стиль утвержден:

- black / graphite base;
- subdued olive tactical/industrial background;
- DELTA orange `#FF7618` как основной brand/action accent;
- белая/серая типографика;
- technical grid / instrument panel aesthetic;
- military mood дозированный: defense-tech / industrial, а не camouflage/stencil theme.

Не усиливать military-background без конкретной необходимости — текущий уровень считается достаточным.

### Typography

Основной UI/font direction: **IBM Plex Sans Condensed**.

Текущая доставка font-файлов — фиксированная CDN-версия через `typography-v2.css`.

Weights:

- 400 — body;
- 600 — navigation/buttons/technical labels;
- 700 — headings/key values.

В production cleanup желательно self-host те же WOFF2, но это не блокирует текущий сайт.

### UI scale

UI Scale v2.2 утвержден:

- увеличенный header;
- увеличенный logo;
- navigation ~15 px;
- технические labels и System Path увеличены для читаемости;
- footer/readability увеличены;
- H1/H2 специально не раздувались.

### Polish

`polish-v2.css` содержит финальный refinement:

- focus states;
- hover states;
- section rhythm;
- system-card accents;
- mobile menu polish;
- sticky-header anchor offsets;
- `prefers-reduced-motion` support.

---

## 8. Brand / logo baseline

Утвержденный logo asset:

`/assets/brand/logo/delta-professional.approved.transparent.v1.png`

Это точный утвержденный visual reference с прозрачным background.

Не возвращаться к CSS-рисованию логотипа и не использовать прежние SVG-аппроксимации как основной wordmark.

`brand-v2.css` отвечает только за отображение утвержденного asset и общий brand accent.

Текущие старые SVG можно считать backup/experimental assets до отдельной cleanup-итерации.

Favicon использует отдельный знак DELTA.

Набор:

- `/favicon.ico`;
- `/favicon.svg`;
- `/favicon-16x16.png`;
- `/favicon-32x32.png`;
- `/apple-touch-icon.png`;
- `/site.webmanifest`.

---

## 9. Media baseline

Подробно: `docs/SITE_MEDIA_BASELINE.md`.

Основной принцип:

- master/source media хранится отдельно от сайта;
- в GitHub — только web-ready assets;
- важные raster images получают responsive variants;
- version/revision входит в имя файла;
- не жертвовать читаемостью схем ради минимального размера.

Reference implementation:

`assets/images/home/delta-cnc-system/`

- `delta-cnc-system.v1.720.webp`;
- `delta-cnc-system.v1.1440.webp`.

HOME использует `srcset`.

Эта structural scheme считается эталоном для будущего image pipeline.

---

## 10. Global button effect

Файл:

`/button-effects-v2.js`

Эффект подключен на всех пяти публичных страницах.

Поведение:

- desktop hover: короткий scan / target-lock sweep;
- click/tap: orange confirmation pulse;
- mobile: tap pulse;
- `prefers-reduced-motion`: animation disabled.

Это утвержденная интерактивная особенность DELTA visual language.

Не размножать effect-код по страницам — поддерживать один global script.

---

## 11. Cache — текущее временное состояние

Во время активной Visual v2 разработки `_headers` переключен на:

```text
/*
  Cache-Control: no-store
```

Это **временный development режим**, чтобы browser cache не мешал проверке CSS/assets.

Перед production cleanup вернуть нормальную стратегию:

- HTML/CSS/JS: revalidate/versioned URLs;
- versioned image/font/brand assets: long cache + immutable;
- не возвращать агрессивный cache до завершения финальной проверки.

---

## 12. Проверено

Пользователь вручную проверил:

- все основные страницы на desktop;
- mobile layout;
- Visual v2 consistency;
- logo с прозрачным background;
- favicon;
- IBM Plex Sans Condensed typography;
- UI Scale v2.2;
- final polish;
- button animation на HOME и после этого одобрил распространение на весь сайт.

Текущий визуальный baseline считается подтвержденным.

---

## 13. Что осталось

### A. Production cleanup — следующий шаг

1. Вернуть production cache policy вместо `no-store`.
2. По возможности self-host IBM Plex Sans Condensed WOFF2.
3. Удалить/архивировать неиспользуемые experimental logo assets после проверки ссылок.
4. Проверить 404 page и поведение несуществующих URL.
5. Финальный technical QA: internal links, external links, downloads, mobile menu, mailto, redirects.

### B. SEO / social

После production cleanup:

- canonical tags;
- OpenGraph / Twitter preview;
- единый OG-image DELTA Professional;
- schema.org Organization / Product при необходимости;
- Search Console;
- sitemap verification;
- Google Business Profile linkage;
- analytics после отдельного решения по инструменту/приватности;
- useful redirects со старых URL, если будут найдены значимые legacy paths.

### C. Контент, который можно добавлять позже

Не блокирует текущий baseline:

- новые реальные фото DELTA CNC;
- видео реальной работы;
- результаты первого реального швейного/вышивального теста;
- verified documentation archive;
- public GitHub projects;
- реальные R&D case studies;
- отдельный business phone / corporate email `@deltaprof.com` после организационного решения.

---

## 14. Следующий рекомендуемый этап

**Production Cleanup v1**.

Не менять дизайн. Работать так же пошагово:

`один production patch -> deploy -> проверка -> фиксация`.

После Production Cleanup v1 переходить к **SEO / Search Console / social preview**, а затем сайт может развиваться уже через новые реальные материалы DELTA CNC и DELTA R&D.

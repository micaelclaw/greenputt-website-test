# GreenPutt Hybrid Home Prototype Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a static custom GreenPutt homepage prototype that feels campaign-led while keeping each section modular enough to export or recreate in Imweb.

**Architecture:** Create a focused static prototype under `prototype/` with content separated from layout and styling. The page will use a large campaign hero, modular homepage sections, and Imweb bridge CTAs without custom commerce, member, order, or board logic.

**Tech Stack:** HTML, CSS, vanilla JavaScript, local Python HTTP server for preview, Browser/Playwright-style manual verification through the in-app browser.

---

## File Structure

- Create `prototype/index.html`: static page shell, metadata, semantic sections, and asset-free fallback layout.
- Create `prototype/styles.css`: responsive visual design, layout, typography, section rhythm, buttons, and mobile behavior.
- Create `prototype/content.js`: structured homepage content model for exportable sections.
- Create `prototype/app.js`: render product cards, support links, and bridge CTA behavior from `content.js`.
- Create `prototype/README.md`: how to preview, what is intentionally static, and what should later move to Imweb.
- Modify `프로젝트_개요.md`: add a short note that the first implementation artifact lives in `prototype/`.

## Scope Boundaries

- Do not build custom payment, cart, login, order, refund, member, notice, FAQ, or board storage.
- Do not add a frontend framework yet.
- Do not add generated images directly to git in this first pass.
- Do not edit Imweb content from this plan.
- Use the selected tone: premium 60%, technology clarity 40%.
- Label Polvert as `GreenPutt StorePick`.

## Task 1: Prototype Shell And Content Contract

**Files:**
- Create: `prototype/index.html`
- Create: `prototype/content.js`

- [ ] **Step 1: Create the static HTML shell**

Create `prototype/index.html`:

```html
<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>GreenPutt | Heads Down. Data On.</title>
    <meta
      name="description"
      content="GreenPutt는 헤드업을 줄이고 퍼팅 거리 피드백을 가까이 보여주는 프리미엄 퍼팅 시스템 브랜드입니다."
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <header class="site-header" aria-label="GreenPutt primary navigation">
      <a class="brand" href="#top" aria-label="GreenPutt home">
        <span class="brand-mark">GP</span>
        <span class="brand-name">GreenPutt</span>
      </a>
      <nav class="primary-nav" aria-label="주요 메뉴">
        <a href="#zero-head-up">Zero Head-Up</a>
        <a href="#products">Products</a>
        <a href="#polvert">Polvert</a>
        <a href="#support">Support</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero section-export" data-export-name="campaign-hero">
        <div class="hero-media" aria-hidden="true">
          <div class="putting-line"></div>
          <div class="projected-data">7.2m</div>
        </div>
        <div class="hero-copy">
          <p class="eyebrow">Premium Putting System</p>
          <h1>Heads Down. Data On.</h1>
          <p class="lead">
            고개를 들지 않고도 퍼팅 거리 피드백을 확인하는 GreenPutt의 제로 헤드업 시스템.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#zero-head-up">제로 헤드업 보기</a>
            <a class="button secondary" href="#polvert">Polvert 구매 경로</a>
          </div>
        </div>
      </section>

      <section id="zero-head-up" class="story section-export" data-export-name="zero-head-up-story">
        <div>
          <p class="eyebrow">Zero Head-Up</p>
          <h2>결과를 보려고 고개를 드는 순간, 스트로크는 흔들립니다.</h2>
        </div>
        <div class="story-grid">
          <article>
            <span class="step">01</span>
            <h3>거리 확인 욕구</h3>
            <p>아마추어 골퍼는 공이 출발한 뒤 결과를 확인하려고 시선을 빨리 들어 올립니다.</p>
          </article>
          <article>
            <span class="step">02</span>
            <h3>가까운 피드백</h3>
            <p>GreenPutt는 퍼팅 데이터가 공 근처에서 보이도록 설계된 연습 흐름을 제안합니다.</p>
          </article>
          <article>
            <span class="step">03</span>
            <h3>반복 가능한 루틴</h3>
            <p>시선과 리듬을 유지한 채 거리 감각을 쌓는 것이 GreenPutt의 핵심 약속입니다.</p>
          </article>
        </div>
      </section>

      <section id="products" class="products section-export" data-export-name="product-system">
        <div class="section-heading">
          <p class="eyebrow">Product System</p>
          <h2>하나의 퍼팅 루틴으로 연결되는 제품들.</h2>
        </div>
        <div id="product-grid" class="product-grid" aria-live="polite"></div>
      </section>

      <section id="polvert" class="bridge section-export" data-export-name="polvert-bridge">
        <div>
          <p class="eyebrow">Selected Product</p>
          <h2>Polvert는 아임웹 구매 플로우로 연결됩니다.</h2>
          <p>
            색상과 사이즈를 선택한 뒤 장바구니 또는 구매하기를 진행합니다. 결제, 회원, 주문, 배송,
            취소와 환불은 GreenPutt 아임웹에서 처리됩니다.
          </p>
        </div>
        <a
          class="button primary bridge-cta"
          href="https://greenputt.kr/all_products/?idx=77"
          data-bridge-target="imweb-polvert"
        >
          Polvert 상품 보기
        </a>
      </section>

      <section id="support" class="support section-export" data-export-name="support-entry">
        <div class="section-heading">
          <p class="eyebrow">Support</p>
          <h2>운영과 문의는 검증된 경로로.</h2>
        </div>
        <div id="support-links" class="support-links"></div>
      </section>
    </main>

    <footer class="site-footer">
      <p>GreenPutt custom home prototype. Commerce and database-backed flows remain on Imweb.</p>
    </footer>

    <script src="./content.js"></script>
    <script src="./app.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Create the structured content model**

Create `prototype/content.js`:

```js
window.GREENPUTT_HOME_CONTENT = {
  products: [
    {
      name: "Smart Putter Assistant",
      label: "Prototype",
      description: "퍼팅 거리 피드백을 가까이 보여주는 제로 헤드업 연습 흐름.",
      cta: "예약 문의",
      href: "#support"
    },
    {
      name: "Putting Mat",
      label: "Prototype",
      description: "실내에서도 반복 가능한 거리 감각과 스트로크 루틴을 만드는 매트.",
      cta: "매트 문의",
      href: "#support"
    },
    {
      name: "Range Feedback Device",
      label: "Concept",
      description: "거리 측정과 피드백을 GreenPutt 시스템 안으로 연결하는 장치.",
      cta: "개발 소식 받기",
      href: "#support"
    },
    {
      name: "Polvert Golf Glove",
      label: "Available via Imweb",
      description: "현재 구매 가능한 GreenPutt selected product. 색상과 사이즈 선택 후 구매합니다.",
      cta: "상품 보기",
      href: "https://greenputt.kr/all_products/?idx=77"
    }
  ],
  supportLinks: [
    { label: "FAQ", href: "https://greenputt.kr/faq" },
    { label: "Notice", href: "https://greenputt.kr/notice" },
    { label: "1:1 Inquiry", href: "#support" },
    { label: "Cart", href: "https://greenputt.kr/shop_cart" }
  ]
};
```

- [ ] **Step 3: Commit the shell and content contract**

Run:

```bash
git add prototype/index.html prototype/content.js
git commit -m "feat: add GreenPutt home prototype shell"
```

Expected: commit succeeds with the two new prototype files.

## Task 2: Rendering Behavior

**Files:**
- Create: `prototype/app.js`

- [ ] **Step 1: Add safe rendering helpers**

Create `prototype/app.js`:

```js
const content = window.GREENPUTT_HOME_CONTENT;

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const label = document.createElement("p");
  label.className = "card-label";
  label.textContent = product.label;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const link = document.createElement("a");
  link.className = "text-link";
  link.href = product.href;
  link.textContent = product.cta;

  card.append(label, title, description, link);
  return card;
}

function createSupportLink(item) {
  const link = document.createElement("a");
  link.className = "support-link";
  link.href = item.href;
  link.textContent = item.label;
  return link;
}

function renderHome() {
  const productGrid = document.querySelector("#product-grid");
  const supportLinks = document.querySelector("#support-links");

  content.products.forEach((product) => {
    productGrid.appendChild(createProductCard(product));
  });

  content.supportLinks.forEach((item) => {
    supportLinks.appendChild(createSupportLink(item));
  });
}

renderHome();
```

- [ ] **Step 2: Verify rendering in a local server**

Run:

```bash
python3 -m http.server 4173 --directory prototype
```

Expected: server starts at `http://localhost:4173/`.

Open `http://localhost:4173/` in the in-app browser.

Expected:

- Four product cards render.
- Four support links render.
- Polvert CTA points to `https://greenputt.kr/all_products/?idx=77`.

- [ ] **Step 3: Commit rendering behavior**

Stop the server with `Ctrl-C`, then run:

```bash
git add prototype/app.js
git commit -m "feat: render GreenPutt prototype content"
```

Expected: commit succeeds with `prototype/app.js`.

## Task 3: Campaign-Led Visual Design

**Files:**
- Create: `prototype/styles.css`

- [ ] **Step 1: Add responsive styling**

Create `prototype/styles.css`:

```css
:root {
  color-scheme: light;
  --ink: #101412;
  --muted: #5d6861;
  --paper: #f6f3ed;
  --surface: #ffffff;
  --line: #d8ddd5;
  --green: #174f37;
  --green-2: #0d3023;
  --lime: #b7ff5a;
  --steel: #6f7e8a;
  --shadow: 0 18px 50px rgba(16, 20, 18, 0.12);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
}

a {
  color: inherit;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 68px;
  padding: 0 28px;
  border-bottom: 1px solid rgba(16, 20, 18, 0.1);
  background: rgba(246, 243, 237, 0.9);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
}

.brand-mark {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border-radius: 50%;
  color: white;
  background: var(--green);
  font-size: 13px;
}

.primary-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 18px;
  color: var(--muted);
  font-size: 14px;
}

.primary-nav a,
.text-link {
  text-decoration: none;
}

.hero {
  position: relative;
  display: grid;
  min-height: calc(100vh - 68px);
  grid-template-columns: minmax(0, 1fr);
  align-items: end;
  overflow: hidden;
  padding: min(12vh, 96px) clamp(24px, 5vw, 72px);
  background:
    linear-gradient(90deg, rgba(9, 20, 15, 0.86), rgba(9, 20, 15, 0.28)),
    radial-gradient(circle at 78% 38%, rgba(183, 255, 90, 0.22), transparent 24%),
    linear-gradient(135deg, #0b1d15, #29463a 54%, #9aa18d);
  color: white;
}

.hero::after {
  content: "";
  position: absolute;
  right: -8vw;
  bottom: -12vh;
  width: min(760px, 82vw);
  height: min(360px, 42vh);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  transform: rotate(-8deg);
}

.hero-media {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.putting-line {
  position: absolute;
  right: 12vw;
  bottom: 26vh;
  width: min(520px, 48vw);
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--lime), transparent);
  transform: rotate(-7deg);
}

.projected-data {
  position: absolute;
  right: clamp(48px, 16vw, 240px);
  bottom: clamp(120px, 24vh, 260px);
  padding: 12px 18px;
  border: 1px solid rgba(183, 255, 90, 0.55);
  color: var(--lime);
  font-size: clamp(28px, 5vw, 72px);
  font-weight: 800;
  line-height: 1;
}

.hero-copy {
  position: relative;
  max-width: 760px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--green);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

.hero .eyebrow {
  color: var(--lime);
}

h1,
h2,
h3,
p {
  overflow-wrap: anywhere;
}

h1 {
  margin: 0;
  max-width: 11ch;
  font-size: clamp(54px, 10vw, 128px);
  line-height: 0.9;
  letter-spacing: 0;
}

h2 {
  margin: 0;
  max-width: 880px;
  font-size: clamp(34px, 5vw, 72px);
  line-height: 1;
  letter-spacing: 0;
}

h3 {
  margin: 0;
  font-size: 22px;
  line-height: 1.15;
}

.lead {
  max-width: 560px;
  margin: 24px 0 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(18px, 2vw, 24px);
  line-height: 1.45;
}

.hero-actions,
.bridge {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.button {
  display: inline-flex;
  min-height: 48px;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  border: 1px solid transparent;
  border-radius: 6px;
  font-weight: 800;
  text-decoration: none;
}

.hero-actions {
  margin-top: 32px;
}

.button.primary {
  color: white;
  background: var(--green);
}

.hero .button.primary {
  color: #0c1b13;
  background: var(--lime);
}

.button.secondary {
  color: white;
  border-color: rgba(255, 255, 255, 0.55);
}

.story,
.products,
.support {
  padding: clamp(72px, 12vw, 148px) clamp(24px, 5vw, 72px);
}

.story {
  background: var(--surface);
}

.story-grid,
.product-grid,
.support-links {
  display: grid;
  gap: 16px;
  margin-top: 40px;
}

.story-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story article,
.product-card,
.support-link {
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--surface);
}

.story article,
.product-card {
  min-height: 230px;
  padding: 24px;
}

.story article p,
.product-card p,
.bridge p,
.site-footer p {
  color: var(--muted);
  line-height: 1.65;
}

.step,
.card-label {
  display: block;
  margin-bottom: 28px;
  color: var(--steel);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}

.product-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: none;
}

.text-link {
  margin-top: 20px;
  color: var(--green);
  font-weight: 800;
}

.bridge {
  justify-content: space-between;
  padding: clamp(56px, 8vw, 92px) clamp(24px, 5vw, 72px);
  background: var(--green-2);
  color: white;
}

.bridge > div {
  max-width: 780px;
}

.bridge .eyebrow {
  color: var(--lime);
}

.bridge p {
  color: rgba(255, 255, 255, 0.78);
}

.support-links {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.support-link {
  min-height: 92px;
  padding: 24px;
  font-weight: 800;
  text-decoration: none;
}

.site-footer {
  padding: 28px clamp(24px, 5vw, 72px);
  border-top: 1px solid var(--line);
}

@media (max-width: 900px) {
  .site-header {
    align-items: flex-start;
    flex-direction: column;
    min-height: 96px;
    padding: 16px 20px;
  }

  .primary-nav {
    justify-content: flex-start;
    gap: 12px;
  }

  .hero {
    min-height: 760px;
    padding: 96px 20px 64px;
  }

  .projected-data {
    right: 24px;
    bottom: 270px;
  }

  .story,
  .products,
  .support,
  .bridge {
    padding-right: 20px;
    padding-left: 20px;
  }

  .story-grid,
  .product-grid,
  .support-links {
    grid-template-columns: 1fr;
  }

  .story article,
  .product-card {
    min-height: 0;
  }
}
```

- [ ] **Step 2: Run desktop preview**

Run:

```bash
python3 -m http.server 4173 --directory prototype
```

Open `http://localhost:4173/`.

Expected:

- Hero occupies the first viewport and shows a hint of the next section when scrolled slightly.
- GreenPutt, putting, and distance feedback are visible in the first viewport.
- Product cards do not resize when hovering or loading.

- [ ] **Step 3: Run mobile preview**

Use browser device emulation or resize the in-app browser to a narrow width.

Expected:

- Header wraps without overlap.
- `Heads Down. Data On.` remains readable.
- CTAs stay inside the viewport.
- Product cards stack in one column.

- [ ] **Step 4: Commit visual design**

Stop the server, then run:

```bash
git add prototype/styles.css
git commit -m "feat: style GreenPutt campaign prototype"
```

Expected: commit succeeds with `prototype/styles.css`.

## Task 4: Prototype Documentation And Brief Update

**Files:**
- Create: `prototype/README.md`
- Modify: `프로젝트_개요.md`

- [ ] **Step 1: Add prototype documentation**

Create `prototype/README.md`:

```markdown
# GreenPutt Home Prototype

This directory contains the first custom homepage prototype for GreenPutt.

## Preview

Run from the repository root:

```bash
python3 -m http.server 4173 --directory prototype
```

Open:

`http://localhost:4173/`

## Intent

- Use a campaign-led first viewport.
- Keep each homepage section modular enough to export as an Imweb image, video, or content block.
- Bridge Polvert purchase traffic into Imweb.
- Keep Imweb responsible for payment, member, order, shipping, cancellation, refund, support, and database-backed pages.

## Current Bridge Targets

- Polvert product: `https://greenputt.kr/all_products/?idx=77`
- Cart: `https://greenputt.kr/shop_cart`
- Inquiry fallback: `#support` until the exact Imweb inquiry URL is confirmed. `https://greenputt.kr/contact` currently redirects to `/`.
```

- [ ] **Step 2: Add a brief note**

In `프로젝트_개요.md`, under `## Maintenance Notes`, add:

```markdown
- The first custom homepage implementation artifact lives in `prototype/`. It is a static experimental prototype for campaign direction, section rhythm, and Imweb-exportable content structure.
```

- [ ] **Step 3: Commit documentation**

Run:

```bash
git add prototype/README.md 프로젝트_개요.md
git commit -m "docs: document GreenPutt prototype workflow"
```

Expected: commit succeeds with prototype documentation and the brief note.

## Task 5: Final Verification

**Files:**
- Verify: `prototype/index.html`
- Verify: `prototype/styles.css`
- Verify: `prototype/content.js`
- Verify: `prototype/app.js`

- [ ] **Step 1: Confirm clean static serving**

Run:

```bash
python3 -m http.server 4173 --directory prototype
```

Expected: server starts without errors.

- [ ] **Step 2: Inspect desktop**

Open `http://localhost:4173/`.

Expected:

- The first viewport feels campaign-led, not like a generic product grid.
- The hero includes GreenPutt brand, putting context, projected distance feedback, and two CTAs.
- The Zero Head-Up, Product System, Polvert Bridge, and Support sections are visible in order.

- [ ] **Step 3: Inspect mobile**

Resize to a mobile viewport.

Expected:

- No text overlaps.
- Navigation remains usable.
- Cards stack cleanly.
- CTAs remain tappable.

- [ ] **Step 4: Verify links**

Click or inspect these URLs:

```text
https://greenputt.kr/all_products/?idx=77
https://greenputt.kr/shop_cart
#support
```

Expected:

- Polvert link opens the Imweb product flow.
- Cart link opens Imweb cart.
- Inquiry links route to the current GreenPutt/Imweb contact path.

- [ ] **Step 5: Stop the server and check git status**

Run:

```bash
git status --short
```

Expected: clean working tree.

## Self-Review

- Spec coverage: The plan covers campaign hero, Zero Head-Up story, product system, Polvert bridge, support entry, responsive behavior, and Imweb backend boundaries.
- Placeholder scan: The plan contains no unresolved placeholder work for the first prototype pass.
- Type consistency: `GREENPUTT_HOME_CONTENT`, `products`, and `supportLinks` are defined in `content.js` and consumed by `app.js` with matching property names.

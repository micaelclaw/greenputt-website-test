const content = window.GREENPUTT_HOME_CONTENT;

function createProductItem(product, index) {
  const item = document.createElement("a");
  item.className = "lineup-item";
  item.href = product.href;
  item.dataset.productIndex = String(index);

  const number = document.createElement("span");
  number.className = "lineup-number";
  number.textContent = String(index + 1).padStart(2, "0");

  const label = document.createElement("p");
  label.className = "lineup-label";
  label.textContent = product.label;

  const title = document.createElement("h3");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const state = document.createElement("span");
  state.className = "lineup-state";
  state.textContent = product.state;

  item.append(number, label, title, description, state);
  return item;
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

  productGrid.append(
    ...content.products.map((product, index) => createProductItem(product, index))
  );

  supportLinks.append(
    ...content.supportLinks.map((item) => createSupportLink(item))
  );
}

function updateStage(product) {
  document.querySelector("#stage-label").textContent = product.label;
  document.querySelector("#stage-title").textContent = product.name;
  document.querySelector("#stage-description").textContent = product.stage || product.description;
}

function bindProductStage() {
  const items = Array.from(document.querySelectorAll(".lineup-item"));

  items.forEach((item) => {
    const product = content.products[Number(item.dataset.productIndex)];
    const activate = () => {
      items.forEach((target) => target.classList.remove("is-active"));
      item.classList.add("is-active");
      updateStage(product);
    };

    item.addEventListener("mouseenter", activate);
    item.addEventListener("focus", activate);
  });

  if (content.products[0]) {
    items[0]?.classList.add("is-active");
    updateStage(content.products[0]);
  }
}

function bindScrollProgress() {
  const progress = document.querySelector("#scroll-progress-bar");
  const heroDistance = document.querySelector("#hero-distance");

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;

    if (heroDistance) {
      const distance = 2.3 + ratio * 5.4;
      heroDistance.textContent = `${distance.toFixed(1)}m`;
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function bindFilmSteps() {
  const steps = Array.from(document.querySelectorAll(".film-step"));
  const distance = document.querySelector("#film-distance");
  const state = document.querySelector("#film-state");

  const activate = (step) => {
    steps.forEach((item) => item.classList.remove("is-active"));
    step.classList.add("is-active");
    distance.textContent = step.dataset.distance;
    state.textContent = step.dataset.state;
  };

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        .slice(0, 1)
        .forEach((entry) => activate(entry.target));
    },
    {
      rootMargin: "-35% 0px -35% 0px",
      threshold: [0.2, 0.45, 0.7]
    }
  );

  steps.forEach((step) => observer.observe(step));
}

renderHome();
bindProductStage();
bindScrollProgress();
bindFilmSteps();

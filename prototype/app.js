const content = window.GREENPUTT_HOME_CONTENT;

function bindViewportUnit() {
  let viewportWidth = window.innerWidth;

  const setViewportUnit = (force = false) => {
    if (!force && window.innerWidth === viewportWidth) {
      return;
    }

    viewportWidth = window.innerWidth;
    document.documentElement.style.setProperty("--app-vh", `${window.innerHeight * 0.01}px`);
  };

  setViewportUnit(true);
  window.addEventListener("resize", () => setViewportUnit());
  window.addEventListener("orientationchange", () => setViewportUnit(true));
}

function createProductItem(product, index) {
  const item = document.createElement("a");
  item.className = "lineup-item";
  item.href = product.href;
  item.dataset.productIndex = String(index);

  const media = document.createElement("span");
  media.className = "lineup-media";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = "";
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 800;
  image.height = 450;
  media.append(image);

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

  item.append(media, number, label, title, description, state);
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
  const image = document.querySelector("#stage-image");

  if (image) {
    image.src = product.image;
    image.alt = product.imageAlt;
  }

  document.querySelector("#stage-label").textContent = product.label;
  document.querySelector("#stage-title").textContent = product.name;
  document.querySelector("#stage-description").textContent = product.stage || product.description;
  document.querySelector("#stage-focus").textContent = product.focus;
  document.querySelector("#stage-signal").textContent = product.signal;
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
  const heroTempo = document.querySelector("#hero-tempo");

  const update = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;

    if (heroDistance) {
      const distance = 2.3 + ratio * 5.4;
      heroDistance.textContent = `${distance.toFixed(1)}m`;
    }

    if (heroTempo) {
      heroTempo.textContent = ratio > 0.42 ? "루틴 반복 중" : "리듬 유지";
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
}

function bindSignalCanvas() {
  const canvas = document.querySelector("#signal-canvas");
  const hero = document.querySelector(".hero");

  if (!canvas || !hero) {
    return;
  }

  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pointer = { x: 0.63, y: 0.72 };
  let time = 0;
  let rafId = 0;

  const resize = () => {
    const rect = hero.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const draw = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const originX = width * 0.1;
    const originY = height * 0.76;
    const targetX = width * pointer.x;
    const targetY = height * pointer.y;
    const pulse = reducedMotion ? 0.72 : (Math.sin(time * 0.04) + 1) / 2;

    context.clearRect(0, 0, width, height);
    context.globalCompositeOperation = "lighter";

    context.lineWidth = 1;
    context.strokeStyle = "rgba(184, 255, 61, 0.12)";
    for (let i = 0; i < 5; i += 1) {
      const offset = i * 44 + pulse * 34;
      context.beginPath();
      context.moveTo(originX + offset, originY + 34);
      context.lineTo(width * 0.92, originY - 94 - i * 12);
      context.stroke();
    }

    const gradient = context.createLinearGradient(originX, originY, targetX, targetY);
    gradient.addColorStop(0, "rgba(184, 255, 61, 0)");
    gradient.addColorStop(0.45, "rgba(184, 255, 61, 0.72)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.14)");
    context.strokeStyle = gradient;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(originX, originY);
    context.quadraticCurveTo(width * 0.48, height * 0.62, targetX, targetY);
    context.stroke();

    for (let i = 0; i < 3; i += 1) {
      const radius = 20 + i * 34 + pulse * 24;
      context.strokeStyle = `rgba(184, 255, 61, ${0.26 - i * 0.06})`;
      context.lineWidth = 1.2;
      context.beginPath();
      context.arc(targetX, targetY, radius, 0, Math.PI * 2);
      context.stroke();
    }

    context.fillStyle = "rgba(184, 255, 61, 0.92)";
    context.beginPath();
    context.arc(targetX, targetY, 4.8, 0, Math.PI * 2);
    context.fill();

    context.globalCompositeOperation = "source-over";

    if (!reducedMotion) {
      time += 1;
      rafId = window.requestAnimationFrame(draw);
    }
  };

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = Math.min(0.88, Math.max(0.34, (event.clientX - rect.left) / rect.width));
    pointer.y = Math.min(0.84, Math.max(0.38, (event.clientY - rect.top) / rect.height));
  });

  resize();
  window.addEventListener("resize", resize);
  draw();

  if (reducedMotion) {
    window.cancelAnimationFrame(rafId);
  }
}

function bindFilmDemo() {
  const steps = Array.from(document.querySelectorAll(".film-step"));
  const visual = document.querySelector(".film-visual.is-demo");
  const distance = document.querySelector("#film-distance");
  const state = document.querySelector("#film-state");
  const note = document.querySelector("#demo-note");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cycleDuration = 7200;
  const phaseOffsets = [0, 1400, 3300, 5400];
  let phaseTimers = [];
  let cycleTimer = 0;
  let idleTimer = 0;

  const activate = (step) => {
    if (!step) {
      return;
    }

    steps.forEach((item) => item.classList.remove("is-active"));
    step.classList.add("is-active");
    steps.forEach((item) => item.removeAttribute("aria-current"));
    step.setAttribute("aria-current", "step");

    if (distance) {
      distance.textContent = step.dataset.distance;
    }

    if (state) {
      state.textContent = step.dataset.state;
    }

    if (visual) {
      visual.dataset.phase = step.dataset.phase || "0";
    }

    if (note) {
      note.textContent = step.dataset.note;
    }
  };

  if (!steps.length) {
    return;
  }

  if (visual) {
    visual.style.setProperty("--demo-cycle-duration", `${cycleDuration}ms`);
  }

  const clearCycle = () => {
    phaseTimers.forEach((timer) => window.clearTimeout(timer));
    phaseTimers = [];

    if (cycleTimer) {
      window.clearTimeout(cycleTimer);
      cycleTimer = 0;
    }

    if (idleTimer) {
      window.clearTimeout(idleTimer);
      idleTimer = 0;
    }
  };

  const stopAutoplay = () => {
    clearCycle();
    visual?.classList.remove("is-autoplaying");
  };

  const activateFromUser = (step) => {
    stopAutoplay();
    activate(step);
  };

  steps.forEach((step) => {
    step.tabIndex = 0;
    step.addEventListener("mouseenter", () => activateFromUser(step));
    step.addEventListener("focus", () => activateFromUser(step));
    step.addEventListener("click", () => activateFromUser(step));
  });

  const playCycle = () => {
    clearCycle();
    visual?.classList.add("is-autoplaying");
    activate(steps[0]);

    phaseOffsets.slice(1).forEach((offset, index) => {
      const step = steps[index + 1];
      phaseTimers.push(window.setTimeout(() => activate(step), offset));
    });

    cycleTimer = window.setTimeout(playCycle, cycleDuration);
  };

  const queueIdleCycle = () => {
    if (reducedMotion) {
      return;
    }

    if (idleTimer) {
      window.clearTimeout(idleTimer);
    }

    idleTimer = window.setTimeout(() => {
      if (visual) {
        visual.classList.remove("is-autoplaying");
        void visual.offsetWidth;
      }

      playCycle();
    }, 4600);
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) {
          return;
        }

        stopAutoplay();
        activate(visibleEntry.target);
        queueIdleCycle();
      },
      {
        rootMargin: "-34% 0px -34% 0px",
        threshold: [0.28, 0.48, 0.68]
      }
    );

    steps.forEach((step) => observer.observe(step));
  }

  if (reducedMotion) {
    activate(steps[2] || steps[0]);
    return;
  }

  window.requestAnimationFrame(() => {
    if (visual) {
      visual.classList.remove("is-autoplaying");
      void visual.offsetWidth;
      visual.classList.add("is-autoplaying");
    }

    playCycle();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
      return;
    }

    if (visual) {
      visual.classList.remove("is-autoplaying");
      void visual.offsetWidth;
      visual.classList.add("is-autoplaying");
    }

    playCycle();
  });
}

bindViewportUnit();
renderHome();
bindProductStage();
bindScrollProgress();
bindFilmDemo();
bindSignalCanvas();

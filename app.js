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
  const item = document.createElement("button");
  item.className = "lineup-item";
  item.type = "button";
  item.dataset.productIndex = String(index);
  item.setAttribute("aria-pressed", "false");

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

function createLineupDot(product, index) {
  const dot = document.createElement("button");
  dot.className = "lineup-dot";
  dot.type = "button";
  dot.dataset.productIndex = String(index);
  dot.setAttribute("aria-label", `${product.name} 슬라이드 보기`);
  return dot;
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
  const lineupDots = document.querySelector("#lineup-dots");
  const supportLinks = document.querySelector("#support-links");

  productGrid.append(
    ...content.products.map((product, index) => createProductItem(product, index))
  );

  lineupDots.append(
    ...content.products.map((product, index) => createLineupDot(product, index))
  );

  supportLinks.append(
    ...content.supportLinks.map((item) => createSupportLink(item))
  );
}

function updateStage(product) {
  const image = document.querySelector("#stage-image");
  const stageMedia = document.querySelector(".system-stage-media");

  if (image) {
    image.src = product.stageImage || product.image;
    image.alt = product.stageImageAlt || product.imageAlt;
    image.style.objectFit = product.stageImageFit || product.imageFit || "";
    image.style.objectPosition = product.stageImagePosition || product.imagePosition || "";
  }

  document.querySelector("#stage-label").textContent = product.label;
  document.querySelector("#stage-title").textContent = product.name;
  document.querySelector("#stage-description").textContent = product.stage || product.description;
  document.querySelector("#stage-focus").textContent = product.focus;
  document.querySelector("#stage-signal").textContent = product.signal;

  if (stageMedia) {
    stageMedia.style.setProperty("--stage-hotspot-x", product.hotspot?.x || "50%");
    stageMedia.style.setProperty("--stage-hotspot-y", product.hotspot?.y || "50%");
  }

  const stageCta = document.querySelector("#stage-cta");
  if (stageCta) {
    stageCta.href = product.href;
    stageCta.textContent = product.cta || "자세히 보기";
  }
}

function bindProductStage() {
  const items = Array.from(document.querySelectorAll(".lineup-item"));
  const dots = Array.from(document.querySelectorAll(".lineup-dot"));
  const carousel = document.querySelector(".product-carousel");
  const previousButton = document.querySelector("#lineup-prev");
  const nextButton = document.querySelector("#lineup-next");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const autoplayDuration = 5200;
  let activeIndex = 0;
  let autoplayId = 0;

  const scrollActiveItemIntoView = (index) => {
    const item = items[index];
    const scroller = item?.parentElement;

    if (!item || !scroller) {
      return;
    }

    const targetLeft = item.offsetLeft - scroller.offsetLeft;
    scroller.scrollTo({ left: targetLeft, behavior: "smooth" });
  };

  const activate = (index, options = {}) => {
    if (!items.length) {
      return;
    }

    activeIndex = (index + items.length) % items.length;
    const product = content.products[activeIndex];

    items.forEach((target, targetIndex) => {
      const isActive = targetIndex === activeIndex;
      target.classList.toggle("is-active", isActive);
      target.setAttribute("aria-pressed", String(isActive));
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
      dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
    });

    updateStage(product);
    scrollActiveItemIntoView(activeIndex);

    if (options.focus) {
      items[activeIndex].focus({ preventScroll: true });
    }
  };

  const stopAutoplay = () => {
    window.clearInterval(autoplayId);
    autoplayId = 0;
  };

  const startAutoplay = () => {
    if (reducedMotion || items.length < 2) {
      return;
    }

    stopAutoplay();
    autoplayId = window.setInterval(() => activate(activeIndex + 1), autoplayDuration);
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      activate(index);
      restartAutoplay();
    });
    item.addEventListener("focus", () => activate(index));
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activate(index, { focus: true });
      restartAutoplay();
    });
  });

  previousButton?.addEventListener("click", () => {
    activate(activeIndex - 1, { focus: true });
    restartAutoplay();
  });

  nextButton?.addEventListener("click", () => {
    activate(activeIndex + 1, { focus: true });
    restartAutoplay();
  });

  carousel?.addEventListener("pointerdown", restartAutoplay);

  if (content.products[0]) {
    activate(0);
  }

  startAutoplay();
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
  const heroImage = hero?.querySelector(".hero-image");
  const dashboard = hero?.querySelector(".hero-dashboard");

  if (!canvas || !hero || !heroImage) {
    return;
  }

  const context = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const distanceReadout = document.querySelector("#hero-distance");
  const tempoReadout = document.querySelector("#hero-tempo");
  const pointer = { x: 0.64, y: 0.79 };
  const puttCycle = 3300;
  const heroBallSource = { x: 1087, y: 940 };
  let lastDistanceText = "";
  let lastTempoText = "";
  let puttStartedAt = window.performance.now();
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

  const easeOutCubic = (value) => 1 - (1 - value) ** 3;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const parsePositionValue = (value) => {
    if (value === "left" || value === "top") {
      return 0;
    }

    if (value === "right" || value === "bottom") {
      return 1;
    }

    if (value === "center") {
      return 0.5;
    }

    return Number.parseFloat(value) / 100;
  };

  const getElementBounds = (element) => {
    if (!element) {
      return null;
    }

    const heroRect = hero.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    return {
      top: elementRect.top - heroRect.top,
      right: elementRect.right - heroRect.left,
      bottom: elementRect.bottom - heroRect.top,
      left: elementRect.left - heroRect.left
    };
  };

  const linePoint = (progress, originX, originY, targetX, targetY) => {
    return {
      x: originX + (targetX - originX) * progress,
      y: originY + (targetY - originY) * progress
    };
  };

  const getImagePoint = (sourcePoint) => {
    const imageRect = heroImage.getBoundingClientRect();
    const heroRect = hero.getBoundingClientRect();
    const naturalWidth = heroImage.naturalWidth || 2600;
    const naturalHeight = heroImage.naturalHeight || 1114;
    const scale = Math.max(imageRect.width / naturalWidth, imageRect.height / naturalHeight);
    const renderedWidth = naturalWidth * scale;
    const renderedHeight = naturalHeight * scale;
    const [positionX = "50%", positionY = "50%"] = getComputedStyle(heroImage).objectPosition.split(" ");
    const offsetX = (imageRect.width - renderedWidth) * parsePositionValue(positionX);
    const offsetY = (imageRect.height - renderedHeight) * parsePositionValue(positionY);

    return {
      x: imageRect.left - heroRect.left + offsetX + sourcePoint.x * scale,
      y: imageRect.top - heroRect.top + offsetY + sourcePoint.y * scale
    };
  };

  const updatePuttReadout = (distanceText, tempoText) => {
    if (distanceReadout && distanceText !== lastDistanceText) {
      distanceReadout.textContent = distanceText;
      lastDistanceText = distanceText;
    }

    if (tempoReadout && tempoText !== lastTempoText) {
      tempoReadout.textContent = tempoText;
      lastTempoText = tempoText;
    }
  };

  const draw = (now = window.performance.now()) => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const isNarrow = width < 700;
    const dashboardBounds = getElementBounds(dashboard);
    const imageBallPoint = getImagePoint(heroBallSource);
    const originX = clamp(imageBallPoint.x, 0, width);
    let originY = clamp(imageBallPoint.y, 0, height);
    let targetX = width * pointer.x;
    let targetY = originY;

    if (isNarrow) {
      const minTargetX = originX + 48;
      const maxTargetX = Math.max(minTargetX, width - 70);
      targetX = clamp(targetX, minTargetX, maxTargetX);
    } else {
      targetX = Math.max(targetX, originX + 90);
    }

    if (dashboardBounds) {
      if (isNarrow) {
        const safeBottom = dashboardBounds.top - 18;
        if (originY > safeBottom) {
          originY = safeBottom;
        }

        targetY = originY;
      } else {
        const minTargetX = originX + 90;
        const maxTargetX = Math.max(minTargetX, dashboardBounds.left - 120);
        targetX = Math.min(targetX, maxTargetX);
      }
    }
    const pulse = reducedMotion ? 0.72 : (Math.sin(now * 0.003) + 1) / 2;
    const cycleProgress = reducedMotion ? 0.62 : ((now - puttStartedAt) % puttCycle) / puttCycle;
    const rollDuration = 0.72;
    const cupInStart = 0.7;
    const cupInEnd = 0.98;
    const rollProgress = Math.min(1, cycleProgress / rollDuration);
    const easedRoll = easeOutCubic(rollProgress);
    const ballPoint = linePoint(easedRoll, originX, originY, targetX, targetY);
    const cupIn = cycleProgress >= cupInStart && cycleProgress < cupInEnd;
    const puttDistance = clamp(
      1.2 + ((targetX - originX) / (width * (isNarrow ? 0.46 : 0.44))) * 4.2,
      1.0,
      6.8
    );
    const tempoText = cupIn ? "컵인 · 나이스 퍼트" : "라인 유지";
    updatePuttReadout(`${puttDistance.toFixed(1)}m`, tempoText);

    context.clearRect(0, 0, width, height);

    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgba(1, 7, 4, 0.84)";
    context.beginPath();
    context.ellipse(targetX, targetY + 3, isNarrow ? 12 : 17, isNarrow ? 4 : 6, 0, 0, Math.PI * 2);
    context.fill();
    context.strokeStyle = "rgba(255, 255, 255, 0.36)";
    context.lineWidth = 1.2;
    context.stroke();

    context.globalCompositeOperation = "lighter";

    if (!isNarrow) {
      context.lineWidth = 1;
      context.strokeStyle = "rgba(184, 255, 61, 0.12)";
      for (let i = 0; i < 5; i += 1) {
        const offset = i * 44 + pulse * 34;
        const guideY = originY - 11 - i * 6;
        context.beginPath();
        context.moveTo(originX + offset * 0.14, guideY);
        context.lineTo(Math.min(width * 0.92, targetX + 300), guideY - 1);
        context.stroke();
      }
    }

    const gradient = context.createLinearGradient(originX, originY, targetX, targetY);
    gradient.addColorStop(0, "rgba(184, 255, 61, 0)");
    gradient.addColorStop(0.45, "rgba(184, 255, 61, 0.72)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.14)");
    context.strokeStyle = gradient;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(originX, originY);
    context.lineTo(targetX, targetY);
    context.stroke();

    if (!reducedMotion) {
      const tailLength = isNarrow ? 0.18 : 0.14;
      const tailSegments = 7;
      const ballOpacity = cycleProgress < 0.88 ? 1 : Math.max(0, 1 - (cycleProgress - 0.88) / 0.1);

      context.lineCap = "round";
      context.shadowColor = "rgba(255, 255, 255, 0.32)";
      context.shadowBlur = isNarrow ? 8 : 10;
      for (let i = tailSegments; i > 0; i -= 1) {
        const segmentEnd = Math.max(0, easedRoll - (tailLength * (i - 1)) / tailSegments);
        const segmentStart = Math.max(0, easedRoll - (tailLength * i) / tailSegments);

        if (segmentEnd <= 0 || segmentEnd <= segmentStart) {
          continue;
        }

        const from = linePoint(segmentStart, originX, originY, targetX, targetY);
        const to = linePoint(segmentEnd, originX, originY, targetX, targetY);
        const segmentStrength = (tailSegments - i + 1) / tailSegments;
        const trailGradient = context.createLinearGradient(from.x, from.y, to.x, to.y);
        trailGradient.addColorStop(0, `rgba(255, 255, 255, ${0.01 * ballOpacity})`);
        trailGradient.addColorStop(0.56, `rgba(184, 255, 61, ${0.08 * segmentStrength * ballOpacity})`);
        trailGradient.addColorStop(1, `rgba(255, 255, 255, ${0.24 * segmentStrength * ballOpacity})`);

        context.strokeStyle = trailGradient;
        context.lineWidth = 1.2 + segmentStrength * (isNarrow ? 4.6 : 5.6);
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
      }
      context.shadowBlur = 0;
      context.lineCap = "butt";

      context.fillStyle = `rgba(255, 255, 255, ${0.95 * ballOpacity})`;
      context.shadowColor = "rgba(255, 255, 255, 0.72)";
      context.shadowBlur = 18;
      context.beginPath();
      context.arc(ballPoint.x, ballPoint.y, cupIn ? 4.2 : 5.8, 0, Math.PI * 2);
      context.fill();
      context.shadowBlur = 0;
    }

    if (!isNarrow) {
      for (let i = 0; i < 3; i += 1) {
        const arrivalGlow = cycleProgress > 0.48 && cycleProgress < 0.84 ? 0.16 : 0;
        const radius = 20 + i * 34 + pulse * 24 + arrivalGlow * 80;
        context.strokeStyle = `rgba(184, 255, 61, ${0.26 - i * 0.06 + arrivalGlow})`;
        context.lineWidth = 1.2;
        context.beginPath();
        context.arc(targetX, targetY, radius, 0, Math.PI * 2);
        context.stroke();
      }
    }

    context.fillStyle = "rgba(184, 255, 61, 0.92)";
    context.beginPath();
    context.arc(targetX, targetY, 4.8, 0, Math.PI * 2);
    context.fill();

    if (cupIn) {
      const label = isNarrow ? "컵인" : "CUP-IN · NICE PUTT";
      context.globalCompositeOperation = "source-over";
      context.font = `900 ${isNarrow ? 12 : 13}px ${getComputedStyle(document.documentElement).getPropertyValue("--font-body")}`;
      const labelWidth = context.measureText(label).width;
      const maxLabelX = !isNarrow && dashboardBounds
        ? dashboardBounds.left - labelWidth - 20
        : width - labelWidth - 16;
      const labelX = isNarrow
        ? clamp(targetX + 16, 16, maxLabelX)
        : clamp(targetX - labelWidth / 2, 16, maxLabelX);
      const labelY = targetY - (isNarrow ? 26 : 34);

      context.fillStyle = "rgba(7, 18, 13, 0.92)";
      context.strokeStyle = "rgba(184, 255, 61, 0.62)";
      context.lineWidth = 1;
      context.beginPath();
      if (typeof context.roundRect === "function") {
        context.roundRect(labelX - 10, labelY - 18, labelWidth + 20, 28, 14);
      } else {
        context.rect(labelX - 10, labelY - 18, labelWidth + 20, 28);
      }
      context.fill();
      context.stroke();
      context.fillStyle = "rgba(184, 255, 61, 0.96)";
      context.fillText(label, labelX, labelY + 2);
    }

    context.globalCompositeOperation = "source-over";

    if (!reducedMotion) {
      rafId = window.requestAnimationFrame(draw);
    }
  };

  const triggerPutt = () => {
    puttStartedAt = window.performance.now();
  };

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    pointer.x = Math.min(0.78, Math.max(0.28, (event.clientX - rect.left) / rect.width));
    pointer.y = Math.min(0.86, Math.max(0.38, (event.clientY - rect.top) / rect.height));
    triggerPutt();
  });
  hero.addEventListener("pointerenter", triggerPutt);

  resize();
  window.addEventListener("resize", resize);
  draw();

  if (reducedMotion) {
    window.cancelAnimationFrame(rafId);
  }
}

function bindFilmDemo() {
  const steps = Array.from(document.querySelectorAll(".film-step"));
  const stepList = document.querySelector(".film-steps");
  const visual = document.querySelector(".film-visual.is-demo");
  const distance = document.querySelector("#film-distance");
  const state = document.querySelector("#film-state");
  const note = document.querySelector("#demo-note");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stepDuration = 3500;
  const cycleDuration = stepDuration * Math.max(steps.length, 1);
  let activeIndex = 0;
  let autoplayTimer = 0;
  let resumeTimer = 0;

  const activate = (step) => {
    if (!step) {
      return;
    }

    const nextIndex = steps.indexOf(step);
    if (nextIndex >= 0) {
      activeIndex = nextIndex;
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

  const clearAutoplayTimer = () => {
    if (autoplayTimer) {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = 0;
    }
  };

  const clearResumeTimer = () => {
    if (resumeTimer) {
      window.clearTimeout(resumeTimer);
      resumeTimer = 0;
    }
  };

  const restartVisualCycle = () => {
    if (!visual) {
      return;
    }

    visual.style.setProperty("--demo-cycle-offset", `${activeIndex * -stepDuration}ms`);
    visual.classList.remove("is-autoplaying");
    void visual.offsetWidth;
    visual.classList.add("is-autoplaying");
  };

  const scheduleNextStep = () => {
    if (reducedMotion || !steps.length) {
      return;
    }

    clearAutoplayTimer();
    autoplayTimer = window.setTimeout(() => {
      activate(steps[(activeIndex + 1) % steps.length]);
      scheduleNextStep();
    }, stepDuration);
  };

  const startAutoplay = () => {
    restartVisualCycle();
    scheduleNextStep();
  };

  const pauseAutoplay = () => {
    clearAutoplayTimer();
    clearResumeTimer();
    visual?.classList.remove("is-autoplaying");
  };

  const isStepListActive = () => (
    stepList?.matches?.(":hover") || stepList?.contains(document.activeElement)
  );

  const resumeAutoplay = (delay = 0, options = {}) => {
    if (reducedMotion || (!options.force && isStepListActive())) {
      return;
    }

    clearResumeTimer();

    resumeTimer = window.setTimeout(startAutoplay, delay);
  };

  const activateFromUser = (step) => {
    activate(step);
    if (!isStepListActive()) {
      resumeAutoplay();
    }
  };

  steps.forEach((step) => {
    step.tabIndex = 0;
    step.addEventListener("mouseenter", () => activateFromUser(step));
    step.addEventListener("focus", () => activateFromUser(step));
    step.addEventListener("click", () => activateFromUser(step));
  });

  stepList?.addEventListener("mouseenter", pauseAutoplay);
  stepList?.addEventListener("mouseleave", () => resumeAutoplay(0, { force: true }));
  stepList?.addEventListener("focusin", pauseAutoplay);
  stepList?.addEventListener("focusout", (event) => {
    if (!stepList.contains(event.relatedTarget)) {
      resumeAutoplay(0);
    }
  });

  if (reducedMotion) {
    activate(steps[0]);
    return;
  }

  activate(steps[0]);
  window.requestAnimationFrame(startAutoplay);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      pauseAutoplay();
      return;
    }

    resumeAutoplay(0);
  });
}

bindViewportUnit();
renderHome();
bindProductStage();
bindScrollProgress();
bindFilmDemo();
bindSignalCanvas();

const content = window.GREENPUTT_HOME_CONTENT;

function createProductItem(product, index) {
  const item = document.createElement("a");
  item.className = "lineup-item";
  item.href = product.href;

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
  document.querySelector("#product-grid").append(
    ...content.products.map((product, index) => createProductItem(product, index))
  );

  document.querySelector("#support-links").append(
    ...content.supportLinks.map((item) => createSupportLink(item))
  );
}

renderHome();

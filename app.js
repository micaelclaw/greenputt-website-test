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

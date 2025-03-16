function showCategories() {
  const parent = document.querySelector(".categories > div");
  categories.forEach((category) => {
    const categoryElement = document.createElement("div");
    categoryElement.textContent = category.name;
    categoryElement.setAttribute("data-category-id", category.id);
    categoryElement.classList.add("category-item");

    parent.appendChild(categoryElement);
  });
}

function showProducts(products, categoryId) {
  const parent = document.querySelector(".products > div");
  const parentPrice = document.querySelector(".information > div");
  const result = document.querySelector(".order-info");
  parent.setAttribute("data-category-id", categoryId);
  parent.innerHTML = "";
  parentPrice.innerHTML = "";
  result.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.textContent = product.name;
    productElement.setAttribute("data-products-id", product.id);
    productElement.setAttribute("data-product-price", product.price);
    productElement.classList.add("product-item");

    parent.appendChild(productElement);
  });
}

document.addEventListener("DOMContentLoaded", showCategories);

document.querySelector(".categories").addEventListener("click", (event) => {
  if (!event.target.classList.contains("category-item")) {
    return;
  }

  const categoryId = parseInt(event.target.getAttribute("data-category-id"));

  const selectedCategory = categories.find(
    (category) => category.id === categoryId
  );
  if (!selectedCategory) {
    return;
  }

  showProducts(selectedCategory.products, categoryId);
});

document.querySelector(".products").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-item")) {
    return;
  }

  const productPrice = event.target.getAttribute("data-product-price");
  const parent = document.querySelector(".information > div");
  parent.innerHTML = "";
  const result = document.querySelector(".order-info");
  result.innerHTML = "";
  const info = document.createElement("div");
  const btn = document.createElement("button");
  btn.classList.toggle("button");
  btn.textContent = "Buy";
  info.textContent = `Price: ${productPrice}$`;
  parent.appendChild(info);
  parent.appendChild(btn);
});
document.querySelector(".information").addEventListener("click", (event) => {
  if (!event.target.classList.contains("button")) {
    return;
  }
  const result = document.querySelector(".order-info");
  result.innerHTML = "";
  const resultText = document.createElement("div");

  resultText.textContent =
    "Congratulations, your purchase is complete. You can continue shopping";
  result.appendChild(resultText);
});

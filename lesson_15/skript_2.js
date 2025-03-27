function tablObjGet(order) {
  const result = document.querySelector(".order-info");
  result.innerHTML = "";
  const keys = Object.keys(order[0]);
  order.forEach((ord) => {
    const value = keys.map((key) => ord[key] || "not");
    tableGet(value, keys, false);
  });
}

const myOrdersBtn = document.createElement("button");
myOrdersBtn.textContent = "My orders";
myOrdersBtn.classList.add("btn_orders");
myOrdersBtn.classList.add("button");
document.querySelector(".header").appendChild(myOrdersBtn);

myOrdersBtn.addEventListener("click", () => {
  const wrapForm = document.querySelector(".wrapper_form");
  wrapForm.classList.remove("active");
  showOrders();
});

function showOrders() {
  const wrap = document.querySelector(".wrapper");
  const ordInf = document.querySelector(".order-info");
  wrap.innerHTML = "";
  ordInf.innerHTML = "";

  const orderAll = JSON.parse(localStorage.getItem("Order")) || [];

  if (orderAll.length === 0) {
    wrap.innerHTML = "<h2>No orders</h2>";
  } else {
    orderAll.forEach((order, index) => {
      const orderDiv = document.createElement("div");
      orderDiv.classList.add("order-item");
      orderDiv.innerHTML = `
                <p><strong>Date:</strong> ${order.date || "Невідомо"}</p>
                <p><strong>Product:</strong> ${
                  order["Product Name"] || "Underfind"
                }</p>
                <p><strong>Ціна:</strong> ${
                  order["Product Price"] || "Underfind"
                }$</p>
                <button class='view-order' data-index='${index}'>Details</button>
                <button class='delete-order' data-index='${index}'>Delete</button>`;
      wrap.appendChild(orderDiv);
    });
  }
  const backBtn = document.createElement("button");
  backBtn.textContent = "Back";
  backBtn.classList.add("btn_back");
  wrap.appendChild(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });

  document.querySelectorAll(".view-order").forEach((button) => {
    button.classList.add("button");
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      showOrderDetails(index);
    });
  });

  document.querySelectorAll(".delete-order").forEach((button) => {
    button.classList.add("button");
    button.addEventListener("click", (event) => {
      const index = event.target.dataset.index;
      deleteOrder(index);
    });
  });
}

function showOrderDetails(index) {
  const orderAll = JSON.parse(localStorage.getItem("Order")) || [];
  const order = orderAll[index];

  if (!order) {
    return;
  }

  const wrap = document.querySelector(".wrapper");
  wrap.innerHTML = "<h2>Details order</h2>";

  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("order-details");

  Object.keys(order).forEach((key) => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${key}:</strong> ${order[key]}`;
    detailsDiv.appendChild(p);
  });

  wrap.appendChild(detailsDiv);

  const backBtn = document.createElement("button");
  backBtn.textContent = "Назад";
  backBtn.classList.add("btn_back");
  wrap.appendChild(backBtn);
  backBtn.addEventListener("click", () => {
    showOrders();
  });
}

function deleteOrder(index) {
  let orderAll = JSON.parse(localStorage.getItem("Order")) || [];
  orderAll.splice(index, 1);
  localStorage.setItem("Order", JSON.stringify(orderAll));
  showOrders();
}

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
    const wrapForm = document.querySelector('.wrapper_form');
    wrapForm.classList.toggle('active');
  });
  document.querySelector('.btn_sumbit').addEventListener('click', () => {
    const form = document.querySelector('.form');
    const formElements = document.forms.endBuy.elements;
    const nameInput = formElements.name;
    const name = formElements.name.value;
    console.log(name)
    const pattern = /^[A-Z][a-z]{1,} [A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
    const pattern2 = /\w{1,}/;
    const pattern3 = /^\d{1,2}$/;
    const pattern4 = /^[a-zA-Z0-9_ ]{15,}$/;
    const existError = document.querySelector('.red');
    let hasError = false;

    if (existError) {
      existError.remove();
    }
    const arrValue = [];
    const arrHeader = [];

    function validGet (input, pattern) {
      const value = input.value;
      const head = input.title;
      if(pattern.test(value)) {
        input.style.borderColor = 'green';
        arrValue.push(value);
        arrHeader.push(head);
      } else if (value === 0 || value === '' || !pattern.test(value)) {
        input.style.borderColor = 'red';
        hasError = true;
      } 
    }

    validGet(nameInput, pattern);
    const cityInput = formElements.city;
    validGet(cityInput, pattern2);
    const mailInput = formElements.mail;
    validGet(mailInput, pattern2);

    const paymentInput = formElements.payment;
    let paymentCheck = false;
    for(let input of paymentInput) {
      if (input.checked) {
        paymentCheck = true;
        arrHeader.push('Payment');
        arrValue.push(input.title)
        break;
      }
    }
    if (paymentCheck) {
      document.querySelector('.radio').style.border = 'none';
    } else {
      document.querySelector('.radio').style.border = '1px solid red'
      hasError = true;
    }
    const amountInput = formElements.amount;
    validGet(amountInput, pattern3);
    const commentImput = formElements.comment;
    validGet(commentImput, pattern4)

    if (hasError) {
      let error = document.createElement('div');
        error.textContent = 'Error. Checked all input';
        
        error.classList.add('red');
        form.appendChild(error);
    } else {
    const table = document.createElement('table');
    const tr_head = document.createElement('tr');
    tr_head.classList.add('tr_1')
    arrHeader.forEach((a) => {
      let td = document.createElement('td');
      td.textContent = a;
      tr_head.appendChild(td);
    })
    table.appendChild(tr_head);
    const tr_value = document.createElement('tr');
    arrValue.forEach((a) => {
      let td = document.createElement('td');
      td.textContent = a;
      tr_value.appendChild(td);
      table.appendChild(tr_value);
    })
    const result = document.querySelector(".order-info");
    result.innerHTML = "";
    const resultText = document.createElement("div");
  
    resultText.textContent =
      "Congratulations, your purchase is complete. You can continue shopping";
      result.appendChild(table);
    result.appendChild(resultText);
    const wrapForm = document.querySelector('.wrapper_form');
    wrapForm.classList.toggle('active');
  }
  });
  

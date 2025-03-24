const regExp = /^[A-Z][a-z]{1,}$/;
const regExp2 = /^[a-zA-Z0-9_ ]{5,}$/;
const regExp3 = /^\+380\d{9}$/;
const regExp4 = /^[a-z0-9._]{3,}@[a-z0-9._]{2,}\.[a-z]{2,}$/;
const errorMessage = document.querySelector('.error-message');
const arrValue = [];
const arrHeader = [];
let hasError = false;
function validator (input, pattern) {
    const value = input.value;
    const head = input.title;
    if (input.nextElementSibling.classList.contains('active')) {
        input.nextElementSibling.classList.remove('active');
      }
    if(pattern.test(value)) {
      input.style.borderColor = 'green';
      arrHeader.push(head);
      arrValue.push(value);
    } else if (!pattern.test(value)) {
      input.style.borderColor = 'red';
      input.nextElementSibling.classList.add('active');
      hasError = true;
    } 
  }
  const FormElement = document.forms.Form.elements;
  
  

  // document.querySelector('.Sumbit').addEventListener('click', () => {
  //   hasError = false;
  //   const NameInput = FormElement.name;
  //   validator(NameInput, regExp);
  //   const MessageInput = FormElement.message;
  //   validator(MessageInput, regExp2);
  //   const PhoneInput = FormElement.phone;
  //   validator(PhoneInput, regExp3)
  //   const EmailInput = FormElement.email;
  //   validator(EmailInput, regExp4);
  //   if (!hasError) {
  //       const table = document.createElement('table');
  //   const tr_head = document.createElement('tr');
  //   tr_head.classList.add('tr_1')
  //   arrHeader.forEach((a) => {
  //     let td = document.createElement('td');
  //     td.textContent = a;
  //     tr_head.appendChild(td);
  //   })
  //   table.appendChild(tr_head);
  //   const tr_value = document.createElement('tr');
  //   arrValue.forEach((a) => {
  //     let td = document.createElement('td');
  //     td.textContent = a;
  //     tr_value.appendChild(td);
  //     table.appendChild(tr_value);
  //   })
  //   const result = document.querySelector(".order-info");
  //   result.innerHTML = "";
  //     result.appendChild(table);
  //   }
  // });

  const formConfig = {
    name: {
      regExp: /^[A-Z][a-z]{1,}$/,
      required: false,
    },
    message: {
      regExp: /^[a-zA-Z0-9_ ]{5,}$/,
      required: false,
    },
    phone: {
      regExp: /^\+380\d{9}$/,
      required: false,
    },
    email: {
      regExp: /^[a-z0-9._]{3,}@[a-z0-9._]{2,}\.[a-z]{2,}$/,
      required: false,
    }
  };

  document.querySelector('.Sumbit').addEventListener('click', () => {
    hasError = false;
    const formElements = {};
    for (let key in formConfig) {
      const value = FormElement[key].value;
      formElements[key] = value;
    }
    validForm(formElements);
    tableGet(Object.keys(formElements), Object.values(formElements));
  });

  function validForm(a) {
    for(let key of Object.entries(a)) {
      validInput(key[0], key[1]);
    }
  };

  function validInput(key, value) {
    
    if (FormElement[key].nextElementSibling.classList.contains('active')) {
      FormElement[key].nextElementSibling.classList.remove('active');
    }
    if (formConfig[key].regExp.test(value)) {
      FormElement[key].style.borderColor = 'green'
      
    } else {
      FormElement[key].style.borderColor = 'red';
      FormElement[key].nextElementSibling.classList.add('active');
      hasError = true;
    };
    
    
  }

  function tableGet (a, b) {
    if (!hasError) {
    arrHeader.push(...a);
    arrValue.push(...b);
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
      result.appendChild(table);
  } else {
    return;
  }
  }

  console.log(hasError)
      
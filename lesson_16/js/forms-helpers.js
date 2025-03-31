const carFormConfig = {
  brand: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.brand-error',
    errorMessage: 'Brand is incorrect',
    // tag: 'input',
    // type: 'text',
    // placeholder: 'Enter brand',
  },
  model: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.model-error',
    errorMessage: 'Model is incorrect',
  },
  color: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.color-error',
    errorMessage: 'Color is incorrect',
  },
  year: {
    regExp: /^\d{4}$/,
    errorSelector: '.year-error',
    errorMessage: 'Year is incorrect',
  },
  complectation: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.complectation-error',
    errorMessage: 'Complectation is incorrect',
  }
};

const clientFormConfig = {
  name: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.name-error',
    errorMessage: 'Name is incorrect',
  },
  age: {
    regExp:/^\d{1,2}$/,
    errorSelector: '.age-error',
    errorMessage: 'Age is incorrect',
  },
  male: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.male-error',
    errorMessage: 'Male is incorrect',
  },
  adress: {
    regExp: /^\w{3,10}$/i,
    errorSelector: '.adress-error',
    errorMessage: 'Adress is incorrect',
  }
};

function isValid(config, obj) {
  let valid = true;
  
  for (let key in config) {
    if (!obj[key].match(config[key].regExp)) {
      document.querySelector(config[key].errorSelector).innerHTML = config[key].errorMessage;
      valid = false;
    } else {
      document.querySelector(config[key].errorSelector).innerHTML = '';
    }
  }

  return valid;
}
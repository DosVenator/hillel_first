
function createClientsInterface() {
    const parent = document.querySelector('.wrapper');
    hideCarForm();
    generateAddButtonClient(parent);
    generateGridClient(parent);
  }
  
  function generateGridClient(parent) {
    const data = getClients();
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid');
    generateGridHeaderClient(gridElement);
    generateGridContentClient(gridElement, data);
  
    observeGridButtonsClient(gridElement)
  
    parent.appendChild(gridElement);
  }

  function generateAddButtonClient(parent) {
    const button = document.createElement('button');
    button.textContent = 'Add new client';
    button.classList.add('add-button');
    button.addEventListener('click', () => {
      const parent = document.querySelector('.wrapper');
      generateClientsForm(parent)
    })
    parent.appendChild(button);
  }

  function generateGridHeaderClient(parent) {
    parent.innerHTML = `
      <div class="row header-row">
        <div>Name</div>
        <div>Age</div>
        <div>Male</div>
        <div>Adress</div>
        <div>Options</div>
      </div>
    `;
  }
  
  function generateGridContentClient(parent, clients) {
    for(let client of clients) {
      const row = `
        <div class="row client-row">
          <div>${client.name}</div>
          <div>${client.age}</div>
          <div>${client.male}</div>
          <div>${client.adress}</div>
          <div data-id="${client.id}">
            <button type="button" data-action="view">View</button>
            <button type="button" data-action="edit">Edit</button>
            <button type="button" data-action="delete">Delete</button>
          </div>
        </div>
      `;
  
      parent.innerHTML += row;
    }
  }

  function generateClientsForm(parent, clientId = '') {
    const client = clientId ? getClientById(clientId) : null;
  
    const form = `
      <form name="client">
        <p>
          <input type="text" name="name" placeholder="Enter name" ${client ? `value="${client.name}"` : ''}>
          <span class="error name-error"></span>
        </p>
        <p>
          <input type="text" name="age" placeholder="Enter age" ${client ? `value="${client.age}"` : ''}>
          <span class="error age-error"></span>
        </p>
        <p>
          <input type="text" name="male" placeholder="Enter male" ${client ? `value="${client.male}"` : ''}>
          <span class="error male-error"></span>
        </p>
        <p>
          <input type="text" name="adress" placeholder="Enter adress" ${client ? `value="${client.adress}"` : ''}>
          <span class="error adress-error"></span>
        </p>
        <p>
          <input type="hidden" name="clientId" value="${clientId}" />
          <button type="button">Save</button>
        </p>
      </form>
    `;
  
    parent.innerHTML = form;
  
    observeClientFormButton();
  }

  function observeClientFormButton() {
    document.querySelector('form[name="client"] button').addEventListener('click', () => {
      const form = document.forms.client;
  
      const client = {
        name: form.name.value,
        age: form.age.value,
        male: form.male.value,
        adress: form.adress.value,
      }
  
      const clientId = form.clientId.value;
      if (isValid(clientFormConfig, client)) {
        if (clientId) {
          client.id = clientId;
          saveClient(client, 'edit');
        } else {
          const id = Date.now();
          client.id = id;
          saveClient(client);
        }
  
        hideCarForm();
        createClientsInterface();
      }
  
    });
  }

  function observeGridButtonsClient(gridElement) {
    gridElement.addEventListener('click', event => {
      if (event.target.tagName !== 'BUTTON') {
        return;
      }
  
      const buttonType = event.target.getAttribute('data-action');
      const clientId = event.target.parentNode.getAttribute('data-id');
      
      switch(buttonType) {
        case 'view':
            viewClientDetails(clientId);
            break;
        case 'edit':
            editClientForm(clientId);
            break;
        case 'delete':
            deleteClient(clientId);
            break;
      }
    });
  };

  function viewClientDetails(clientId) {
    const client = getClientById(clientId);
    hideCarForm();
    const parent = document.createElement('div');
    parent.textContent = 'Details'
    for(let key in client) {
      const pg = document.createElement('p');
      pg.textContent = `${key} - ${client[key]}`;
      parent.appendChild(pg);
      document.querySelector('.wrapper').appendChild(parent);
    }
  }
  
  function deleteClient(clientId) {
    doubleCheck(function (check) {
      if(check) {
        deleteClientById(clientId);
  
        const elementToBeRemoved = document.querySelector(`.client-row *[data-id="${clientId}"]`).parentNode;
        elementToBeRemoved.remove();
      }
    })
  }
  
  function editClientForm(clientId) {
    const parent = document.querySelector('.wrapper');
    generateClientsForm(parent, clientId);
  }
  
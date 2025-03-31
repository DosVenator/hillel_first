const serviceMode = {
  cars: {
    title: 'Cars',
    callback: createCarsInterface,
  },
  clients: {
    title: 'Clients',
    callback: createClientsInterface,
  }
};

function generateNavigation() {
  const parent = document.querySelector('nav');

  const listElement = document.createElement('ul');

  for (let mode in serviceMode) {
    const item = document.createElement('li');
    item.setAttribute('data-mode', mode);
    item.textContent = serviceMode[mode].title;

    item.addEventListener('click', serviceMode[mode].callback);

    listElement.appendChild(item);
  }

  parent.appendChild(listElement);
}
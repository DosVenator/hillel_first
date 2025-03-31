function getCars() {
  return JSON.parse(localStorage.getItem('cars')) || [];
}
function getClients() {
  return JSON.parse(localStorage.getItem('clients')) || [];
}
// {brand:'Ford', model: 'Focus', color: 'white', year: 2025, id: 1}
function getCarById(carId) {
  const allCars = getCars();

  const myCar = allCars.find(car => car.id == carId);

  return myCar;
}

function getClientById(clientId) {
  const allClients = getClients();

  const myClient = allClients.find(client => client.id == clientId);

  return myClient;
}

function saveCar(car, action = 'add') {
  const allCars = getCars();
  if (action === 'add') {
    allCars.push(car);
  } else {
    updateCar(car, allCars);
  }
  localStorage.setItem('cars', JSON.stringify(allCars))
}

function saveClient(client, action = 'add') {
  const allClients = getClients();
  if (action === 'add') {
    allClients.push(client);
  } else {
    updateCar(client, allClients);
  }
  localStorage.setItem('clients', JSON.stringify(allClients))
}

function updateCar(myCar, allCars) {
  const index = allCars.findIndex(car => car.id == myCar.id);

  allCars[index] = myCar;
}

function updateClient(myClient, allClients) {
  const index = allClients.findIndex(client => client.id == myClient.id);

  allClients[index] = myClient;
}

function deleteCarById(carId) {
  const allCars = getCars();
  const index = allCars.findIndex(car => car.id == carId);

  allCars.splice(index, 1);
  localStorage.setItem('cars', JSON.stringify(allCars));
}

function deleteClientById(clientId) {
  const allClients = getClients();
  const index = allClients.findIndex(client => client.id == clientId);

  allClients.splice(index, 1);
  localStorage.setItem('clients', JSON.stringify(allClients));
}

function getClients() {
  return JSON.parse(localStorage.getItem('clients')) || [];
}

function doubleCheck (callback) {
  const modal = document.querySelector('.modal');
  modal.style.display = 'block';

  modal.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
      modal.style.display = 'none';
      callback(false);
    } else if (event.target.classList.contains('btn_modal_no')) {
      modal.style.display = 'none';
      callback(false);
    } else if (event.target.classList.contains('btn_modal_yes')) {
      modal.style.display = 'none';
      callback(true);
    }
  })
}

/*

cars: [
  {
    brand,
    model,
    color,
    year,
    id,
  }
]




*/
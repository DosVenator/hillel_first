let houses = [];
let currentApartment = null;
let currentHous = null;

function createHouse() {
  const number = document.getElementById("houseNumber").value;
  const amount = parseInt(document.getElementById("houseApartments").value);
  if (!number || isNaN(amount) || amount <= 0) {
    alert("Please enter valid house number and apartment count.");
    return;
  }
  currentHouse = new House(number, amount);
  houses.push(currentHouse);
  document.getElementById("apartmentSection").style.display = "block";
}

function addResidentToCurrentApartment() {
  const name = document.getElementById("residentName").value;
  const age = parseInt(document.getElementById("residentAge").value);
  const job = document.getElementById("residentJob").value;

  if (!name || isNaN(age) || !job) {
    alert("Please enter all resident details.");
    return;
  }

  if (!currentApartment) {
    const aptNumber = parseInt(document.getElementById("aptNumber").value);
    const aptRooms = parseInt(document.getElementById("aptRooms").value);
    if (!aptNumber || !aptRooms) {
      alert("Please enter apartment number and room count before adding residents.");
      return;
    }
    currentApartment = new Apartment(aptNumber, aptRooms);
  }

  const resident = new Resident(name, age, job);
  currentApartment.addResident(resident);

  document.getElementById("residentName").value = "";
  document.getElementById("residentAge").value = "";
  document.getElementById("residentJob").value = "";
}

function addApartment() {
  if (currentApartment) {
    currentHouse.addApartment(currentApartment);
    currentApartment = null;
    document.getElementById("aptNumber").value = "";
    document.getElementById("aptRooms").value = "";
    alert("Apartment added successfully.");
  } else {
    alert("Please create an apartment and add at least one resident.");
  }
}

function showHouseInfo() {
  const output = document.getElementById("houseInfo");
  output.innerHTML = '';
  houses.forEach((house, index) => {
     output.innerHTML += `<p><strong>House №${house.number}</strong>, Apartments: ${house.apartments.size}/${house.amountApartment}</p>`;

     house.apartments.forEach((apt) => {
    
        const resInfo = Array.from(apt.residents).map(r => r.getDisplayInfo()).join('<br>');
        output.innerHTML += `<div style='margin-top:10px'><strong>Apartment №${apt.number}</strong><br>Rooms: ${apt.room}, Max Residents: ${apt.maxResidents}<br>${resInfo}</div>`;
      });

      document.getElementById("infoSection").style.display = "block";
  })

}
document.querySelector('.btn_newHouse').addEventListener('click', () => {
    document.getElementById("houseNumber").value = "";
    document.getElementById("houseApartments").value = "";
    document.getElementById("apartmentSection").style.display = "none";
    currentHouse = null;
    currentApartment = null;
  });

document.querySelector('.btn_next').addEventListener('click', () => {
    createHouse();
})
document.querySelector('.btn_addResident').addEventListener('click', () => {
    addResidentToCurrentApartment();
})
document.querySelector('.btn_addApartment').addEventListener('click', () => {
    addApartment();
})
document.querySelector('.btn_showInfo').addEventListener('click', () => {
    showHouseInfo();
})
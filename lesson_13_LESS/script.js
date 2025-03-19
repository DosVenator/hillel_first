document.querySelector(".btn_save").addEventListener("click", () => {
  const formElement = document.forms.registration.elements;
  const name = formElement.name.value;
  const female = formElement.female.value;
  const birth = formElement.birth.value;
  const gender = formElement.gender.value;
  const city = formElement.city.value;
  const adress = formElement.adress.value;

  const selectedLang = [];
  for (let i = 0; i < formElement.lang.length; i++) {
    if (formElement.lang[i].checked) {
      selectedLang.push(formElement.lang[i].value);
    }
  }
  const obj = [name, female, birth, gender, city, adress, selectedLang];

  const table = document.createElement("table");
  const header = [
    "Name",
    "Female",
    "Birthday",
    "Gender",
    "City",
    "Address",
    "Languages",
  ];
  const tr_head = document.createElement("tr");
  header.forEach((a) => {
    const td = document.createElement("td");
    td.textContent = a;
    tr_head.appendChild(td);
  });
  table.appendChild(tr_head);
  const tr = document.createElement("tr");
  obj.forEach((a) => {
    const td = document.createElement("td");
    td.textContent = a;
    tr.appendChild(td);
    table.appendChild(tr);
    document.querySelector(".container_2").appendChild(table);
  });
});

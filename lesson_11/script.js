const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn_2");
const btn3 = document.querySelector(".btn_3");
const tabl = document.querySelector(".table");
const text = document.querySelector(".text");
const photo = document.querySelector(".photo");

btn.addEventListener("click", () => {
  tabl.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    tabl.appendChild(row);
    for (let j = 1; j <= 10; j++) {
      const cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "red";
      });
      cell.addEventListener("mouseout", () => {
        cell.style.backgroundColor = "";
      });
    }
  }
  tabl.classList.toggle("active");
});

//2

btn2.addEventListener("click", () => {
  text.classList.toggle("red");
});

//3

btn3.addEventListener("click", () => {
  const a = Math.floor(Math.random() * 10 + 1);
  const pht = document.createElement("img");
  const phtGet = document.querySelector("img");
  if (phtGet) {
    phtGet.remove();
  } else {
    pht.src = `./photo/ph_${a}.jpeg`;
    photo.appendChild(pht);
    pht.style.width = "500px";
    pht.style.height = "auto";
  }
});

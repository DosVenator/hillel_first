const collection = [
  "./photo/ph_1.jpeg",
  "./photo/ph_2.jpeg",
  "./photo/ph_3.jpeg",
  "./photo/ph_4.jpeg",
  "./photo/ph_5.jpeg",
  "./photo/ph_6.jpeg",
  "./photo/ph_7.jpeg",
];
let currentIndex = 0;
const slider = document.querySelector(".slider");
slider.src = collection[currentIndex];
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function deleteBtn() {
  if (currentIndex === 0) {
    prev.classList.add("active");
  } else {
    prev.classList.remove("active");
  }
  if (currentIndex >= collection.length - 1) {
    next.classList.add("active");
  } else {
    next.classList.remove("active");
  }
}

function updateImage() {
  slider.src = collection[currentIndex];
}

function pagginationGet() {
  document.querySelectorAll("li").forEach((li, index) => {
    li.classList.remove("red");
    if (index === currentIndex) {
      li.classList.add("red");
    }
  });
}

for (let i = 0; i < collection.length; i++) {
  const ul = document.querySelector(".ul");
  const li = document.createElement("li");
  ul.appendChild(li);
  li.dataset.index = i;
}

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = 0;
  }
  updateImage();
  deleteBtn();
  pagginationGet();
});

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= collection.length) {
    currentIndex = collection.length - 1;
  }
  updateImage();
  deleteBtn();
  pagginationGet();
});

document.querySelector(".ul").addEventListener("click", (event) => {
  if (event.target.dataset.index) {
    currentIndex = Number(event.target.dataset.index);
    updateImage();
    deleteBtn();
    pagginationGet();
  } else {
    return;
  }
});

deleteBtn();
pagginationGet();

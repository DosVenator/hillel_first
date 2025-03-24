const collection = [
  "./photo/ph_1.jpeg",
  "./photo/ph_2.jpeg",
  "./photo/ph_3.jpeg",
  "./photo/ph_4.jpeg",
  "./photo/ph_5.jpeg",
  "./photo/ph_6.jpeg",
  "./photo/ph_7.jpeg",
];

const descr = document.querySelector(".descr");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;

collection.forEach((src, index) => {
  const img = document.createElement("img");
  img.classList.add("slide");
  img.src = src;
  descr.appendChild(img);
  if (index !== 0) {
    img.style.display = "none";
  }
});

const slides = document.querySelectorAll(".slide");

collection.forEach((src, index) => {
  const ul = document.querySelector(".ul");
  const li = document.createElement("li");
  ul.appendChild(li);
  li.dataset.index = index;
});

function updateImg(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
  pagginationGet(index);
}
function pagginationGet(ind) {
  document.querySelectorAll("li").forEach((li, index) => {
    li.classList.remove("red");
    if (index === ind) {
      li.classList.add("red");
    }
  });
}

function deleteBtn(index) {
  if (index === 0) {
    prev.classList.add("active");
  } else {
    prev.classList.remove("active");
  }
  if (index >= collection.length - 1) {
    next.classList.add("active");
  } else {
    next.classList.remove("active");
  }
}

document.querySelector(".ul").addEventListener("click", (event) => {
  if (event.target.dataset.index) {
    const newSlide = Number(event.target.dataset.index);
    updateImg(newSlide);
    currentIndex = newSlide;
    deleteBtn(currentIndex);
  }
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = 0;
  }
  updateImg(currentIndex);
  pagginationGet(currentIndex);
  deleteBtn(currentIndex);
});
next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= collection.length) {
    currentIndex = collection.length - 1;
  }
  updateImg(currentIndex);
  pagginationGet(currentIndex);
  deleteBtn(currentIndex);
});
pagginationGet(currentIndex);
deleteBtn(currentIndex);

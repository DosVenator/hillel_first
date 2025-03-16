const lms_2 = document.querySelector(".containerParent");
lms_2.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn_1")) {
    console.log("This is button 1");
  } else if (event.target.classList.contains("btn_2")) {
    console.log("This is button 2");
  } else if (event.target.classList.contains("btn_3")) {
    console.log("This is button 3");
  } else {
    console.log("This is container");
  }
});

function formReset () {
    const form = document.querySelector('.form');
    form.reset();
    const allInputs = form.querySelectorAll("input, textarea");
    allInputs.forEach((input) => {
      input.style.borderColor = "";
    });
    document.querySelector(".radio").style.border = "none";
}

let clearId;

function autoSlider() {
  clearId = setInterval(() => {
    currentIndex = currentIndex + 1;
    if (currentIndex === collection.length) {
      currentIndex = 0;
    }
    updateImg(currentIndex);
    pagginationGet(currentIndex);
    deleteBtn(currentIndex);
  }, 3000);
}

function resetAutoSlider() {
  clearInterval(clearId);
  autoSlider();
}

autoSlider();

function getSum(a) {
  return function (b) {
    return a * b;
  };
}

console.log(getSum(2)(6));

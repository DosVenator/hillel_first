function getSum() {
    let sum = 0;
    return function (a) {
      sum += a;
      return sum;
    };
  }
  
  let func1 = getSum();
  
  console.log(func1(2));
  console.log(func1(2));
  console.log(func1(2));
  console.log(func1(2));
  
  console.log("----------"); //Питання, чи вірно виконано завдання у двух варіантах?
  
  let sum2 = 0;
  function getSum2(a) {
    return (sum2 += a);
  }
  console.log(getSum2(3));
  console.log(getSum2(3));
  console.log(getSum2(3));
  console.log(getSum2(3));
  
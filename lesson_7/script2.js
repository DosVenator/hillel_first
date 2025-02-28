let arr2 = [18, 1292, "hello", "config", 120]; // for example
let arr = [];
let userLength;
do {
  userLength = prompt("Enter lenght of array");
} while (isNaN(userLength) || userLength < 1);

for (let i = 0; i < userLength; i++) {
  let a = prompt("Enter element of array");
  arr.push(a);
}

let sum = 0;
let number = 0;

function getSum(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(parseInt(a[i]))) {
      sum += parseInt(a[i]);
      number++;
    }
  }
  console.log(sum);
  console.log((sum / number).toFixed(2));
}

getSum(arr);
getSum(arr2);

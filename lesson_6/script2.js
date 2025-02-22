const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//a

// let sum = 0;
// let number = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i];
//         number += 1;
//     }
// }
// console.log(`The sum of positive  numbers is equal to ${sum}`);
// console.log(`The number of positive  numbers ${number}`);

//b

// let minDigit = arr[0];
// let index = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < minDigit) {
//         minDigit = arr[i];
//         index = i;
//     }
// }
// console.log(`The minimum number is ${minDigit} its index is ${index}`);

//c

// let maxDigit = arr[0];
// let index = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxDigit) {
//         maxDigit = arr[i];
//         index = i;
//     }
// }
// console.log(`The max number is ${maxDigit} its index is ${index}`);

//d

// let number = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         number += 1;
//     }
// }
// console.log(`The number of negative numbers ${number}`);

//e

// let number = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 !== 0) {
//         number += 1;
//     }
// }
// console.log(`The number of positive  and odd digit it's ${number}`);

//f

// let number = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 === 0) {
//         number += 1;
//     }
// }
// console.log(`The number of positive  and even digit it's ${number}`);

//g

// let number = 0;
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 === 0) {
//         sum += arr[i];
//         number += 1;
//     }
// }
// console.log(`The number of positive and even digit it's ${number} their sum ${sum}`);

//h

// let number = 0;
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] % 2 !== 0) {
//         sum += arr[i];
//         number += 1;
//     }
// }
// console.log(`The number of positive and odd digit it's ${number} their sum ${sum}`);

//i

// let prod = 1;
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         prod *= arr[i];
//     }
// }
// console.log(`The product of positive  numbers is equal to ${prod}`);

//j

let maxDigit = arr[0];
for(let i = 0; i < arr.length; i++) {
    if (arr[i] > maxDigit) {
        maxDigit = arr[i];
    }
}
for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== maxDigit) {
        arr[i] = 0;
    }
}
console.log(arr);
console.log(maxDigit);


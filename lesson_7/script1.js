// let arr = [];
// let userLength = prompt('Enter lenght of array');

// let sum = 0;

// for(let i = 0; i < userLength; i++) {
//     let a = prompt('Enter element of array');
//     arr.push(a);
//     if (!isNaN(parseInt(a))) {
//         sum += parseInt(a);
//     }
// }
// console.log(arr);
// console.log(sum);


let arr = [];
let userLength;
do {
userLength = prompt('Enter lenght of array');
} while (isNaN(userLength) || userLength < 1);

for(let i = 0; i < userLength; i++) {
    let a = prompt('Enter element of array');
    arr.push(a);
}

let summ = 0;
let kolk = 0;

function getSum (a, b) {
    for(let i = 0; i < a.length; i++) {
        if (!isNaN(parseInt(a[i]))) {
            summ += parseInt(a[i]);
            kolk++;
        }
    }
    console.log(summ);
    console.log(summ / kolk);
}

getSum(arr);

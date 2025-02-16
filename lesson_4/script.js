// (1) First task

const a = 10;
const b = 10;
if (a > b) {
    console.log('First number is bigger');
}
else if (a < b) {
    console.log('Second number is bigger');
}
else {
    console.log('Numbers are equal');
}

// (2) second task

const A = prompt('Enter the number in feet');
const B = prompt('Enter the number in kilometers');
const metersA = (A * 0,305);
const metersB = (B * 1000);
console.log(metersA);
console.log(metersB);
if (metersA > metersB) {
    console.log('First number is bigger');
}
else if (metersA < metersB) {
    console.log('Second number is bigger');
}
else {
    console.log('Numbers are equal');
}

// (3) Third task

const first = prompt('entered random number');
const two = prompt('entered random number');
if (first % two === 0) {
    console.log('Second number is the divisor');
}
else if (two % first === 0) {
    console.log('First number is the divisor');
}
else {
    console.log('No number number is a divisor')
}

// (4) Fourth task (1)

const a4 = prompt('etered a two-digit number');
const ArrA = a4.split('');
if (ArrA[1] % 2 === 0) {
    console.log('This is paired')
}
else {
    console.log('This is not paired')
}
console.log(ArrA[1]);

// (4) Fourth task (2)

const a4_1 = prompt('etered a two-digit number');
let resultA_4 = (a4_1 % 10);
if (resultA_4 % 2 === 0) {
    console.log('Second number is paired')
}
else {
    console.log('Second number is not paired')
}
console.log(resultA_4);

// (5) Five task (1)
const number = prompt('Entered two-digit number');
const firstDigit = parseInt(number / 10);
const secondDigit = parseInt(number % 10);
console.log(firstDigit);
if (firstDigit > secondDigit) {
    console.log('First number is bigger');
}
else if (firstDigit < secondDigit) {
    console.log('Second number is bigger');
}
else {
    console.log('Numbers are equal');
}

// (5) Five task (2)

const number_5 = prompt('Entered two-digit number');
const resultNum = number_5.split('');
if (resultNum[0] > resultNum[1]) {
    console.log('First number is bigger');
}
else if (resultNum[0] < resultNum[1]) {
    console.log('Second number is bigger');
}
else {
    console.log('Numbers are equal');
}

//(6) Sixth task

const threeNum = prompt("entered three-digit number");
const firstDigit_6 = parseInt(threeNum / 100);
const secondDigit_6 = parseInt((threeNum / 10) % 10);
const threeDigit_6 = parseInt(threeNum % 10);
const Sum = firstDigit_6 + secondDigit_6 + threeDigit_6;
const Prod = firstDigit_6 * secondDigit_6 * threeDigit_6;
//(a)
if (Sum % 2 === 0) {
  console.log("Sum is double");
} else {
  console.log("Sum is not double");
}
//(b)
if (Sum % 5 === 0) {
  console.log("multiple of five");
} else {
  console.log("not multiple of five");
}
//(c)
console.log(Prod > 100 ? 'true' : 'false');
//(d)
console.log(firstDigit_6 === secondDigit_6 && secondDigit_6 === threeDigit_6 ? 'Yes, it is true' : 'Not, it is false');
//(e)
console.log(firstDigit_6 === secondDigit_6 || secondDigit_6 === threeDigit_6 ? 'Yes, it is true' : 'Not, it is false');

//(7) Seventh task

const NumSix = prompt('entered six-digit number');
console.log(NumSix[0] === NumSix[5] && NumSix[1] === NumSix[4] && NumSix[2] === NumSix[3] ? 'Number is mirror' : 'Number is not mirror');


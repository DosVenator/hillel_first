//4.1 LMS

const UserName = prompt('What is your name?');
if (UserName === null || UserName === '') {
alert(`It is a pity that you did not want to enter your Name`)
} else {
    alert(`Hello, ${UserName}! How are you?`)
};

//4.2 LMS виконав на уроці рядок 109 - 111 script.js.

//4.3 LMS 

const UserBorn = prompt('What year are you born?')

const ResultBorn = (2025 - parseInt(UserBorn));
if (UserBorn === null || UserBorn === '') {
    alert('It is a pity that you did not want to enter your age')
}
const UserCity = prompt('Where are you from?');
if (UserCity === null || UserCity === '') {
    alert('It is a pity that you did not want to enter your city')
} else if (UserCity.toLowerCase() === 'kyiv') {
    alert(`Your age ${ResultBorn}. You live in the capital of Ukraine`)
} else if
    (UserCity.toLowerCase() ==='washington') {
    alert(`Your age ${ResultBorn}. You live in the capital of the USA`)
} else if
    (UserCity.toLowerCase() === 'london') {
    alert(`Your age ${ResultBorn}. You live in the capital of England`)
} else {
    alert(`Your age ${ResultBorn}. You live in the city of ${UserCity}`)
}

const UserSport = prompt('What is your favorite sport?');
if (UserSport === null || UserSport === '') {
    alert('It is a pity that you did not want to enter your favorite sport')
} else if (UserSport.toLowerCase() === 'football') {
    alert('Steeply! Do you want to become Cristiano Ronaldo?')
} else if (UserSport.toLowerCase() === 'volleyball') {
    alert('Steeply! Do you want to become Fabio Balaso?')
} else if (UserSport.toLowerCase() === 'boxing') {
    alert('Steeply! Do you want to become Oleksandr Usyk?')
}


//4.4 LMS

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch (numOrStr) {
    case null: console.log('ви скасували');
    break;
    case '': console.log('Empty String');
    break;
    default: console.log('OK!');
    break;
}

/* не зміг придумати як вписати сюди isNaN( +numOrStr), так як воно повертає булеве значення, а case потрібна більш сувора перевірка. */

/* цей код написаний ChatGPT, я начебто зрозумів як він це зробив, але тоді я не розумію доцільність використання конструкції switch */

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}
 
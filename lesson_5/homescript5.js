// let userNum;
// let minNum = 0;
// let flag_1 = false;
// let i = 1;
// let degree = 0;
// let startNum = 1;
// let flag_2 = false;

// do {
// userNum = parseInt(prompt('Enter digit bigger than ' + 1));
// } while (userNum < 1);

// /* спочатку вивів такий код, але зіштовхнувся з проблемою відображення самогу ступеня, при якому ми маємо даний результат */

// // for(i = 1; i < userNum; i++) {
// //     let result = i * 3;
// //     if (result === userNum) {
// //         flag_1 = true;
// //         break;
// //     } 
// //     console.log(result)
// // }
// // if(flag_1) {
// //     document.write(`<p>This number can be obtained by raising the number 3 to the power</p>`)
// // } else {
// //     document.write(`<p>This number cannot be obtained by raising the number 3 to the power</p>`)
// // }



// while (startNum <= userNum) {
//     if (startNum === userNum) {
//         flag_2 = true;
//         break;
//     }
//     startNum *= 3;
//     degree++;
// }

// if (flag_2) {
//     document.write(`<p>This number can be obtained by raising to the power of ${degree}th</p>`)
// } else {
//     document.write('<p>This number cannot be obtained when raised to the 3th power</p>')
// }
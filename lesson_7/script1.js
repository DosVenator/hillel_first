let user;
do {
  user = prompt("Enter any string");
} while (!isNaN(parseInt(user)));
user = user.split("");

let delet;
do {
  delet = prompt("Enter any symbol for delete");
} while (delet === null);
dele = delet.split("");

function deleteA(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let e = 0; e < b.length; e++) {
      if (a[i] === b[e]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  console.log(a.join(""));
}

deleteA(user, delet);

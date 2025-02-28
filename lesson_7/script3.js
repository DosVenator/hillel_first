let user;
do {
  user = prompt("Enter any string");
} while (user === null);
user = user.split("");
console.log(user);

function deleteA(a, b) {
  b = String(b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1);
      i--;
    }
  }
  console.log(a.join(""));
}

deleteA(user, 2);

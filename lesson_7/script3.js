let user = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function deleteA(a, b) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b) {
      a.splice(i, 1);
      i--;
    }
  }
}

deleteA(user, 8);

console.log(user);

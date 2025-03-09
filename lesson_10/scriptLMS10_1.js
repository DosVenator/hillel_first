// task 1.1

const result = orders.reduce((a, b) => {
  a[b.user] = (a[b.user] || 0) + 1;
  return a;
}, {});
console.log(result);

// task 1.2

const result2 = orders.reduce((a, b) => {
  a.set(b.user, (a.get(b.user) || 0) + 1);
  return a;
}, new Map());
console.log(result2);

// task 2.1

const result3 = orders.reduce((a, b) => {
  const total = b.items.reduce((sum, item) => (sum += item.price), 0);
  a.set(b.user, (a.get(b.user) || 0) + total);
  return a;
}, new Map());
console.log(result3);

// task 2.2

const result4 = orders.reduce((a, b) => {
  const total = b.items.reduce((sum, item) => (sum += item.price), 0);
  a[b.user] = (a[b.user] || 0) + total;
  return a;
}, {});
console.log(result4);

// tsak 3

const result5 = orders.reduce((a, b) => {
  const names = b.items.reduce((value, digit) => (value = digit.name), "");
  a.add(names);
  return a;
}, new Set());
console.log(result5);

// task 4

const key = Object.keys(result4);

let max = key[0];
for (let i = 0; i < key.length; i++) {
  if (result4[key[i]] > result4[max]) {
    max = key[i];
  }
}
console.log(`${max} spent more than everyone else - ${result4[max]}$ (First)`);

const maxUser = key.reduce(function (max, user) {
  if (result4[max] < result4[user]) {
    return user;
  }
  return max;
}, key[0]);
console.log(`${maxUser} spent more than everyone else - ${result4[maxUser]}$ (Second)`);

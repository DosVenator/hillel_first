const result = orders.reduce((a, b) => {
    a[b.user] = (a[b.user] || 0) + 1; 
    return a;
}, {})
console.log(result);

const result2 = orders.reduce((a, b) => {
    a.set(b.user, (a.get(b.user) || 0) + 1); 
    return a;
}, new Map())
console.log(result2);

const result3 = orders.reduce((a, b) => {
    const total = b.items.reduce((sum, item) => sum += item.price, 0);
    a.set(b.user, (a.get(b.user) || 0) + total); 
    return a;
}, new Map())
console.log(result3);

const result4 = orders.reduce((a, b) => {
    const total = b.items.reduce((sum, item) => sum += item.price, 0);
    a[b.user] = (a[b.user] || 0) + total; 
    return a;
}, {})
console.log(result4);
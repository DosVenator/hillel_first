const students = ['Jack Daniels', 'Will Smith', 'Bill Gates'];

// iterates values
for(let student of students) {
 console.log(student);
}

// iterates keys
for(let index in students) {
 console.log(index);
}

const user = { firstName: 'Captain', lastName: 'America' };

for (let key in user) {
 console.log(`Key: ${key} -> Value ${user[key]}`);
}

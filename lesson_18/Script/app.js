// lesson_18

const appartment_1 = new Apartment(10, 3);
appartment_1.addResident(new Resident('Ivan', 22, 'developer'))
appartment_1.addResident(new Resident('Maria', 20, 'developer'))
appartment_1.addResident(new Resident('Oleg', 21, 'doctor'))
appartment_1.addResident(new Resident('Vasiliy', 22, 'teacher'))

const appartment_2 = new Apartment(11, 1);
appartment_2.addResident(new Resident('Vadim', 24, 'designer'))
appartment_2.addResident(new Resident('Iryna', 24, 'photographer'))

const house_1 = new House(1, 4);
house_1.addApartment(appartment_1);
house_1.addApartment(appartment_2);
house_1.getInfo();

// calculator

const calc = new Calculator();
  
console.log(calc.add(5, 3));     
console.log(calc.subtract(10, 4));
console.log(calc.multiply(3, 6)); 
console.log(calc.divide(8, 2)); 

// coach

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.displayInfo(); 
coach2.displayInfo(); 

// bankAccount

const myBank = new BankAccount;
myBank.setBalance(1000);
myBank.deposit(500);
myBank.withdraw(200);
myBank.getBalance();
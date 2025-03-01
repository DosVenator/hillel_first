function getNumber() {
  let userValue;
  for (let i = 0; i < 10; i++) {
    userValue = prompt("Enter a number bigger than 100");
    if (userValue === null) {
      console.log("User closed input");
      return;
    }
    userValue = Number(userValue);
    if (isNaN(userValue)) {
      userValue = "User entered is not a number";
      console.log("Invalid input. Please, enter a number");
    } else if (userValue > 100) {
      console.log(
        `User entered  a number bigger than 100, this is: ${userValue}`
      );
      return;
    }
  }
  console.log(`Your attemps are over, last value: ${userValue}`);
}

getNumber();

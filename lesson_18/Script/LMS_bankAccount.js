class BankAccount {
    #balance = 0;
    setBalance(value) {
        this.#balance = value;
    }
    getBalance() {
        console.log(this.#balance);
    }
    deposit(value){
        this.#balance += value;
    }
    withdraw(value){
        this.#balance -= value;
    }
}

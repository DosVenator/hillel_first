class House {
  constructor(number, amountApartment) {
      this.number = number;
      this.amountApartment = amountApartment;
      this.apartments = new Map();
  }
  addApartment(flat) {
      if (this.apartments.size < this.amountApartment) {
        this.apartments.set(flat.number, flat);
      } else {
        alert(`House №${this.number} must have ${this.amountApartment} flat!`);
      }
    }
  getInfo() {
      console.log(`House №${this.number}, amount apartment: ${this.amountApartment}`)
      for (let [num, apt] of this.apartments.entries()) {
          apt.getInfo();
        }
  }
}

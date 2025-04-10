class Apartment {
  constructor(number, room) {
      this.number = number;
      this.room = room;
      this.maxResidents = room * 2;
      this.residents = new Set();
  }

  addResident(resident) {
      if (this.residents.size < this.maxResidents) {
        this.residents.add(resident);
      } else {
        alert(`The apartment №${this.number} has been renovated! Max number of residents: ${this.maxResidents}`);
      }
    }

  getInfo() {
      console.log(`Number apartment: ${this.number}, amount rooms: ${this.room}`)
      this.residents.forEach(person => person.getInfo());
  }
}

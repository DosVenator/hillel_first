class Resident {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  getDisplayInfo() {
      return `- ${this.name}, ${this.age} y.o., ${this.job}`;
    }

  getInfo() {
      console.log(`Name: ${this.name}, age: ${this.age}, job: ${this.job}`)
  }
}

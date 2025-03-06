let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  show: function () {
    console.log(this.step);
    return this;
  },
};

console.log(ladder.up().up().show());

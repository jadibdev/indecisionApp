console.log("this file is being watched");


const user = {
    name: 'mohamed',
    cities: ['la', 'sf', 'casablanca', 'new york', 'tangiers'],
    listCities() {
        return this.cities.map((item) => this.name + " has already been to " + city);
    }
};

const multiplier = {
  numbers: [44, 7, 174, 0, 551],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());

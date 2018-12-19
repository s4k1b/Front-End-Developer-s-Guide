class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius*1.8 +32; //Convert to Fahrenheit
  }
  set fahrenheit(value) {
    this.celsius = (value - 32)/1.8; //Convert to celsius
  }
  static fromFahrenheit(value) {
    return new Temperature((value-32)/1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit); //convert to fahrenheit
// -> 71.6
temp.fahrenheit = 86;         //convert to celsius
console.log(temp.celsius);

let tmp1 = Temperature.fromFahrenheit(86);
console.log(tmp1.fahrenheit);
console.log(tmp1.celsius);
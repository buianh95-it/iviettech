const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

// //import things
const myUtility = require("./utilityFnc.js");

//Class Person constructor:
class Person {
  constructor(
    fullName,
    age,
    email,
    gender,
    height,
    weight,
    address,
    id = myUtility.generateId()
  ) {
    this.fullName = fullName;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.address = address;
    this.id = id;
    this.bmi = this.calculateBMI();
    this.healthStatus = this.guessHealth();
  }

  calculateBMI = () => {
    const bmi = this.weight / Math.pow(this.height, 2);
    return bmi.toFixed(1);
  };

  guessHealth = () => {
    const bmi = this.calculateBMI();
    switch (true) {
      case bmi < 18.5:
        return "underweight";
      case bmi <= 24.9:
        return "normal weight";
      case bmi <= 29.9:
        return "overweight";
      case bmi >= 30:
        return "obesity";
    }
  };
}

module.exports = Person;

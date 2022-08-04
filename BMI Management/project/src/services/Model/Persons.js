const log = console.log;
const $ = document.querySelector.bind(document);
//short uuid
const short = require("short-uuid");

function Persons(name, age, gender, email, height, weight, address) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.email = email;
  this.height = height;
  this.weight = weight;
  this.address = address;
  this.id = short.generate();
  this.bmi = calculateBmi().toFixed(1);
  this.healthStatus = guessHealth();

  function calculateBmi() {
    const bmi = weight / Math.pow(height, 2);
    return bmi;
  }
  function guessHealth() {
    const bmi = calculateBmi();
    switch (true) {
      case bmi < 18.5:
        return "under weight";
      case bmi <= 24.9:
        return "normal weight";
      case bmi <= 29.9:
        return "over weight";
      case bmi >= 30:
        return "obesity";
    }
  }
}

export default Persons;

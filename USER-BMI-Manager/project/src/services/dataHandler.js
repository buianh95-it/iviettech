const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

//Import things
const myUtility = require("./utilityFnc.js");
const Person = require("./PersonModel.js");
const PersonStore = require("./localStorageHandler.js");
const UI = require("./uiActionHandler.js");
//Data generate & searching
class DataHandler {
  static generateData() {
    let lastNameList = [
      "Quang Teo",
      "Giang Map",
      "Song Hay Chet",
      "Pop Disco",
      "Never Mind",
      "Anh",
    ];
    let firstNameList = [
      "Bui",
      "Pham",
      "Nguyen",
      "Tran",
      "Ho",
      "Trinh",
      "Michael",
    ];
    let genders = ["male", "female", "other"];
    let addresses = [
      "Da Nang",
      "Ninh Binh",
      "Viet Nam",
      "Hoa Ki",
      "Nhat Ban",
      "Quang Nam",
    ];
    let randomName =
      firstNameList[Math.round(Math.random() * (firstNameList.length - 1))] +
      " " +
      lastNameList[Math.round(Math.random() * (lastNameList.length - 1))];
    let randomAge = Math.round(Math.random() * (50 - 15) + 15);
    let randomEmail = randomName.split(" ").join("") + "@gmail.com";
    let randomGender =
      genders[Math.round(Math.random() * (genders.length - 1))];
    let randomHeight = (Math.random() * (1.9 - 1.5) + 1.5).toFixed(2);
    let randomWeight = (Math.random() * (100 - 40) + 40).toFixed(1);
    let randomAddress =
      addresses[Math.round(Math.random() * (addresses.length - 1))];
    let person = new Person(
      randomName,
      randomAge,
      randomEmail,
      randomGender,
      randomHeight,
      randomWeight,
      randomAddress
    );
    return person;
  }
  static filterData(keywords, searchType) {
    let personsArr = PersonStore.getPersonsFromLocal();
    let matches;
    const regex = new RegExp(`${keywords}`, "gi");

    switch (searchType) {
      case "fullName":
        matches = personsArr.filter((person) => person.fullName.match(regex));
        break;
      case "email":
        matches = personsArr.filter((person) => person.email.match(regex));
        break;
      case "bmi":
        matches = personsArr.filter((person) => person.bmi.match(regex));
        break;
    }
    myUtility.clearTable();
    matches.forEach((match) => UI.addPersonToTable(match));
  }
}

module.exports = DataHandler;

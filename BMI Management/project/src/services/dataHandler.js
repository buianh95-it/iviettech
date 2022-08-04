import uiHandler from "./uiHandler";

const log = console.log;
const $ = document.querySelector.bind(document);

import Persons from "./Model/Persons.js";
import localSt from "./localStorageHandler";

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
    let person = new Persons(
      randomName,
      randomAge,
      randomGender,
      randomEmail,
      randomHeight,
      randomWeight,
      randomAddress
    );
    return person;
  }

  //Data search handler
  static filterData(keywords, searchType) {
    let personsArr = localSt.getLocalStArr();
    let matches;
    const regex = new RegExp(`${keywords}`, "gi");
    switch (searchType) {
      case "fullName":
        matches = personsArr.filter((person) => person.name.match(regex));
        break;
      case "email":
        matches = personsArr.filter((person) => person.email.match(regex));
        break;
      case "bmi":
        matches = personsArr.filter((person) => person.bmi.match(regex));
        break;
    }
    uiHandler.clearTable();
    matches.forEach((match) => uiHandler.addPersonToTable(match));
  }
}

export default DataHandler;

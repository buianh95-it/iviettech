const log = console.log;
const $ = document.querySelector.bind(document);

import Persons from "./Model/Persons.js";

//Name spaces:
var localSt = localSt || {};

// Get local storage arr
localSt.getLocalStArr = function () {
  let arr;
  if (!localStorage.getItem("persons")) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("persons"));
  }
  return arr;
};

// Add person to local storage
localSt.addPersonToLocalSt = function (person) {
  let arr = localSt.getLocalStArr();
  arr.push(person);
  localStorage.setItem("persons", JSON.stringify(arr));
};

// Remove person of local storage
localSt.removePerson = function (personId) {
  let arr = localSt.getLocalStArr();
  arr = arr.filter((el) => el.id !== personId);
  localStorage.setItem("persons", JSON.stringify(arr));
};

//Edit person of local storage
localSt.editPersonToLocal = function (
  changeName,
  changeAge,
  changeEmail,
  changeGender,
  changeHeight,
  changeWeight,
  changeAddress,
  userId
) {
  let changePerson = new Persons(
    changeName,
    changeAge,
    changeGender,
    changeEmail,
    parseInt(changeHeight) / 100,
    changeWeight,
    changeAddress,
    userId
  );
  let persons = localSt.getLocalStArr();
  persons.forEach((person) => {
    if (person.id === userId) {
      (person.name = changePerson.name),
        (person.age = changePerson.age),
        (person.email = changePerson.email),
        (person.gender = changePerson.gender),
        (person.height = changePerson.height),
        (person.weight = changePerson.weight),
        (person.address = changePerson.address),
        (person.bmi = changePerson.bmi),
        (person.healthStatus = changePerson.healthStatus);
    }
  });
  localStorage.setItem("persons", JSON.stringify(persons));
};

export default localSt;

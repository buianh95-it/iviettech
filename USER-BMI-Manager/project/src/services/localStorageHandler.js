const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

//Import things
const Person = require("./PersonModel.js");

// Class handle local storage actions
class PersonStore {
  static getPersonsFromLocal() {
    let persons;
    if (localStorage.getItem("persons") === null) {
      persons = [];
    } else {
      persons = JSON.parse(localStorage.getItem("persons"));
    }
    return persons;
  }

  static addPersonToLocal(person) {
    let persons = PersonStore.getPersonsFromLocal();
    persons.push(person);
    localStorage.setItem("persons", JSON.stringify(persons));
  }

  static removePersonFromLocal(personId) {
    let persons = PersonStore.getPersonsFromLocal();
    persons = persons.filter((el) => el.id !== personId);
    localStorage.setItem("persons", JSON.stringify(persons));
  }

  static editPersonToLocal(
    changeName,
    changeAge,
    changeEmail,
    changeGender,
    changeHeight,
    changeWeight,
    changeAddress,
    userId
  ) {
    let changePerson = new Person(
      changeName,
      changeAge,
      changeEmail,
      changeGender,
      changeHeight,
      changeWeight,
      changeAddress,
      userId
    );
    let persons = PersonStore.getPersonsFromLocal();
    persons.forEach((person) => {
      if (person.id === userId) {
        (person.fullName = changePerson.fullName),
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
  }
}

module.exports = PersonStore;

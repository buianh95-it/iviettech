const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

class UI {
  // displayPerson from Arr
  static displayPerson() {
    let personArr = PersonStore.getPersonsFromLocal();
    personArr.forEach((person) => UI.addPersonToTable(person));
  }

  // show output to table
  static addPersonToTable(person) {
    const output = $("#output");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${person.id}</td>
    <td>${person.fullName}</td>
    <td>${person.age}</td>
    <td>${person.email}</td>
    <td>${person.gender}</td>
    <td>${person.bmi}</td>
    <td>${person.healthStatus}</td>
    <td>
      <button data-bs-toggle="modal" data-bs-target="#editModal"
      class="btn btn-secondary edit" >EDIT</button>
      <a href="#" class="btn btn-danger delete">DELETE</a>
    </td>`;
    tr.classList.add("table-active");
    output.appendChild(tr);
  }

  //Pop up message
  static showMsg = (msg, msgClass) => {
    const div = document.createElement("div");
    const mess = document.createTextNode(msg);
    div.classList.add("alert", msgClass);
    div.appendChild(mess);
    div.style.width = "75%";
    div.style.margin = "auto";
    div.style.marginBottom = "15px";
    $(".container").insertBefore(div, $("#userForm"));
    setTimeout(() => $(".alert").remove(), 2500);
  };

  // Form validation handle
  static formValidate = (fullName, age, email, height, weight, address) => {
    let isValidate = true;
    let emailRegex = new RegExp("[a-z0-9]+@[a-z]{1,15}.[a-z]{2,3}", "gi");
    // check full name
    if (fullName.length === 0 || fullName.length > 50) {
      UI.showMsg("Please enter full name!", "alert-danger");
      isValidate = false;
    }
    //check age
    if (age.length === 0) {
      UI.showMsg("Please enter your age", "alert-danger");
      isValidate = false;
    }
    //check email
    if (!emailRegex.test(email)) {
      UI.showMsg("Incorrect email, please try again", "alert-danger");
      isValidate = false;
    }
    //check height
    if (isNaN(height)) {
      UI.showMsg(
        "Height must be number, eg: 1.65 ( equal 1m65)",
        "alert-danger"
      );
      isValidate = false;
    }
    //check weight
    if (isNaN(weight)) {
      UI.showMsg(
        "Weight must be number, eg: 60.5 ( equal 60.5kg)",
        "alert-danger"
      );
      isValidate = false;
    }
    //check address
    if (address.length > 100) {
      UI.showMsg("Address must be < 100 character", "alert-danger");
      isValidate = false;
    }

    return isValidate;
  };

  // Remove from UI
  static removePerson(personTr) {
    personTr.remove();
  }
}

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

module.exports = UI;

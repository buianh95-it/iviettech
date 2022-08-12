const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

//Event handler:
//Import things
const myUtility = require("./utilityFnc.js");
const Person = require("./PersonModel.js");
const UI = require("./uiActionHandler.js");
const PersonStore = require("./localStorageHandler.js");
const DataHandler = require("./dataHandler.js");
//show table
document.addEventListener("DOMContentLoaded", UI.displayPerson());
//Add input from form to table:
$("#userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  myUtility.scrollTop();
  let fullName = $("#fullName").value;
  let age = $("#age").value;
  let email = $("#email").value;
  let gender = myUtility.getGender();
  let height = parseFloat($("#height").value).toFixed(2);
  let weight = parseFloat($("#weight").value).toFixed(1);
  let address = $("#address").value;
  if (UI.formValidate(fullName, age, email, height, weight, address)) {
    const newPerson = new Person(
      fullName,
      age,
      email,
      gender,
      height,
      weight,
      address
    );
    // Store instance to local store
    PersonStore.addPersonToLocal(newPerson);
    UI.showMsg("Successful, added new user to list!", "alert-success");
    // Add this instance to table;
    UI.addPersonToTable(newPerson);
    myUtility.clearInput();
  }
});

//Remove person from table and local Storage:
$("#output").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let personId =
        e.target.parentElement.parentElement.firstElementChild.innerText;
      personId = parseInt(personId);
      let personTr = e.target.parentElement.parentElement;
      // Remove from UI
      UI.removePerson(personTr);
      //Remove from local storage
      PersonStore.removePersonFromLocal(personId);
      UI.showMsg("Person removed!", "alert-success");
    }
  }
});

//Handle Edit button
// Show change form
$("#output").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    let userId = e.target.parentElement.parentElement.children[0].innerText;
    userId = parseInt(userId);
    //Get all users from LocalStorage:
    let persons = PersonStore.getPersonsFromLocal();
    let personChosen = persons.filter((el) => el.id === userId);
    // Get info person chosen from store
    personChosen = personChosen[0];

    //Show change form to HTML
    $("#changeForm").innerHTML = `
      <h6>You're edit user width id: <span class="user--id">${personChosen.id}</span></h6>
      <label for"changeName">Change name: </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeName" id="changeName" value="${personChosen.fullName}">
        <label for"changeAge">Change age: </label>
        <input class="form-control mt-1 mb-3" type="number" name="changeAge" id="changeAge" value="${personChosen.age}">
        <label for"changeEmail">Change email: </label>
        <input class="form-control mt-1 mb-3" type="email" name="changeEmail" id="changeEmail" value="${personChosen.email}">
        <select id="changeGender" class="form-select mt-2">
          <option value="male") >Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label class="mt-3" for"changeHeight">Change height(m): </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeHeight" id="changeHeight" value="${personChosen.height}">
        <label for"changeWeight">Change weight(kg): </label>
        <input class="form-control mt-1 mb-3" type="text" name="changeWeight" id="changeWeight" value="${personChosen.weight}">
        <label for"changeAddress">Change Address: </label>
        <textarea class="form-control" mt-1 mb-3 id="changeAddress">${personChosen.address} </textarea>
        <div class="btn-group mt-3">
          <button data-bs-dismiss="modal"  type="submit" class="btn btn-primary">Save</button>
          <button type="button" class="btn btn-secondary ml-3" data-bs-dismiss="modal" style="margin-left: 5px;">Cancel</button>
        </div>
      `;
    if (personChosen.gender === "male") {
      $("#changeGender").value = "male";
    } else if (personChosen.gender === "female") {
      $("#changeGender").value = "female";
    } else {
      $("#changeGender").value = "other";
    }
  }
});

//Handle change form actions
$("#changeForm").addEventListener("submit", (e) => {
  myUtility.scrollTop();
  e.preventDefault();
  let userId = parseInt($(".user--id").innerText);
  let changeName = $("#changeName").value;
  let changeAge = $("#changeAge").value;
  let changeEmail = $("#changeEmail").value;
  let changeGender = $("#changeGender").value;
  let changeHeight = $("#changeHeight").value;
  let changeWeight = $("#changeWeight").value;
  let changeAddress = $("#changeAddress").value;
  //Edit in store
  PersonStore.editPersonToLocal(
    changeName,
    changeAge,
    changeEmail,
    changeGender,
    changeHeight,
    changeWeight,
    changeAddress,
    userId
  );
  UI.showMsg("Edit successful!", "alert-success");
  myUtility.clearTable();
  UI.displayPerson();
});

//Event generate 10 data and add to list and local storage:
$("#generateBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to generate 10 random data?")) {
    for (let i = 0; i < 10; i++) {
      // log(DataHandler.generateData());
      PersonStore.addPersonToLocal(DataHandler.generateData());
    }
    myUtility.clearTable();
    UI.displayPerson();
    myUtility.scrollTop();
    UI.showMsg("Random users generated!", "alert-success");
  }
});
//Event empty Data:
$("#emptyBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to clear all data?")) {
    localStorage.clear();
    myUtility.clearTable();
    myUtility.scrollTop();
    UI.showMsg("All data cleared!", "alert-success");
  }
});

//Event search Data:
$("#searchForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let keywords = $("#searchInput").value;
  let searchType = $("#searchType").value;
  if (keywords.length !== 0) {
    DataHandler.filterData(keywords, searchType);
  }
});
//Event reload table:

$("#reload").addEventListener("click", (e) => {
  myUtility.clearTable();
  UI.displayPerson();
});

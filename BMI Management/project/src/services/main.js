const log = console.log;
const $ = document.querySelector.bind(document);

import Persons from "./Model/Persons.js";
import uiHandler from "./uiHandler.js";
import localSt from "./localStorageHandler.js";
import DataHandler from "./dataHandler.js";
//Choose age range handler UI
$(".form-range").addEventListener("input", (e) => {
  $(".ageInput").value = e.target.value;
});
$(".ageInput").addEventListener("keyup", (e) => {
  $(".form-range").value = $(".ageInput").value;
});

//Show table when DOM loaded;
document.addEventListener("DOMContentLoaded", uiHandler.showPersons());

document.addEventListener("DOMContentLoaded", uiHandler.formValidateAction());

//Add user from form to table
$("#mainForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let fullName = $("#fullName").value;
  let age = $("#age").value;
  let gender = $("#gender").value;
  let email = $("#email").value;
  let height = parseInt($("#height").value);
  // convert height from cm to m;
  height = height / 100;
  let weight = $("#weight").value;
  let address = $("#address").value;

  //If form validated, add user to List
  if (uiHandler.isValidated()) {
    const newUser = new Persons(
      fullName,
      age,
      gender,
      email,
      height,
      weight,
      address
    );
    localSt.addPersonToLocalSt(newUser);
    uiHandler.addPersonToTable(newUser);
    uiHandler.clearInput();
    uiHandler.scrollToTop();
    uiHandler.showMsg("User Added", "alert-success");
  } else {
    uiHandler.scrollToTop();
    uiHandler.showMsg("Please enter all field!", "alert-danger");
  }
});

//Remove person
$("#tableOutput").addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    if (
      confirm(
        `Do you want to delete user ${e.target.parentElement.parentElement.children[1].innerText}?`
      )
    ) {
      const tr = e.target.parentElement.parentElement;
      const personId =
        e.target.parentElement.parentElement.firstElementChild.innerText;
      tr.remove();
      localSt.removePerson(personId);
    }
  }
});

//Handle Edit button
// Show change form
$("#tableOutput").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    uiHandler.showFormEdit(e);
  }
});

//Handle change form actions, save new data to local storage
$("#changeForm").addEventListener("submit", (e) => {
  uiHandler.scrollToTop();
  let userId = $(".user--id").innerText;
  let changeName = $("#changeName").value;
  let changeAge = $("#changeAge").value;
  let changeEmail = $("#changeEmail").value;
  let changeGender = $("#changeGender").value;
  let changeHeight = $("#changeHeight").value;
  let changeWeight = $("#changeWeight").value;
  let changeAddress = $("#changeAddress").value;
  //Edit in store
  localSt.editPersonToLocal(
    changeName,
    changeAge,
    changeEmail,
    changeGender,
    changeHeight,
    changeWeight,
    changeAddress,
    userId
  );
  uiHandler.showMsg("Edit successful!", "alert-success");
  uiHandler.clearTable();
  uiHandler.showPersons();
  e.preventDefault();
});

//Reload button event
$("#reloadBtn").addEventListener("click", () => {
  uiHandler.reloadBtn();
});

//Event generate 10 data and add data to list and local storage:
$("#generateBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to generate 10 random data?")) {
    for (let i = 0; i < 10; i++) {
      localSt.addPersonToLocalSt(DataHandler.generateData());
    }
    uiHandler.clearTable();
    uiHandler.showPersons();
    uiHandler.scrollToTop();
    uiHandler.showMsg("Random users generated!", "alert-success");
  }
});

//Event empty data button click

$("#emptyBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (confirm("Are you sure to clear all data?")) {
    localStorage.clear();
    uiHandler.clearTable();
    uiHandler.scrollToTop();
    uiHandler.showMsg("All data cleared!", "alert-success");
  }
});

//Event search Data:
$("#searchBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let keywords = $("#searchInput").value;
  let searchType = $("#searchType").value;
  if (keywords.length !== 0) {
    DataHandler.filterData(keywords, searchType);
  }
});

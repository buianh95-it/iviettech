const log = console.log
const $ = document.querySelector.bind(document)

import Persons from './Model/Persons.js'
import localSt from './localStorageHandler.js'
//uiHandler namespace:
var uiHandler = uiHandler || {}

//Validation handler variable
let isValidated
let areAllValidated = {
  isFullNameValid: false,
  isAgeValid: false,
  isEmailValid: false,
  isHeightValid: false,
  isWeightValid: false,
  isAddressValid: false,
}

//UI show message
uiHandler.showMsg = (msg, className) => {
  const div = document.createElement('div')
  div.innerText = msg
  div.classList.add('alert', className)
  $('#mainApp').insertBefore(div, $('#mainForm'))
  setTimeout(() => {
    $('.alert').remove()
  }, 2500)
}

//UI scroll to top
uiHandler.scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

//UI clear input
uiHandler.clearInput = () => {
  $('#fullName').value = ''
  $('#age').value = ''
  $('#gender').value = ''
  $('#email').value = ''
  $('#height').value = ''
  $('#weight').value = ''
  $('#address').value = ''
  $('#fullName').classList.remove('is-valid')
  $('#age').classList.remove('is-valid')
  $('#gender').classList.remove('is-valid')
  $('#email').classList.remove('is-valid')
  $('#height').classList.remove('is-valid')
  $('#weight').classList.remove('is-valid')
  $('#address').classList.remove('is-valid')
  areAllValidated = {
    isFullNameValid: false,
    isAgeValid: false,
    isEmailValid: false,
    isHeightValid: false,
    isWeightValid: false,
    isAddressValid: false,
  }
}

//UI clear table
uiHandler.clearTable = () => {
  const output = $('#tableOutput')
  while (output.firstChild) {
    output.removeChild(output.firstChild)
  }
}

//show Persons from local storage to table
uiHandler.showPersons = function () {
  const personsArr = localSt.getLocalStArr()
  personsArr.forEach((person) => uiHandler.addPersonToTable(person))
}

//Add single person of table
uiHandler.addPersonToTable = function (person) {
  const tbody = $('#tableOutput')
  const tr = document.createElement('tr')
  tr.innerHTML = `
  <td>${person.id}</td>
  <td>${person.name}</td>
  <td>${person.age}</td>
  <td>${person.email}</td>
  <td>${person.gender}</td>
  <td>${person.bmi}</td>
  <td>${person.healthStatus}</td>
  <td><button data-bs-toggle="modal" data-bs-target="#editModal" class="btn btn-warning edit">EDIT</button> <button class="btn btn-danger remove">REMOVE</button> </td>
  `
  tbody.appendChild(tr)
}

uiHandler.formValidateAction = function () {
  //validate full name
  $('#fullName').addEventListener('change', (e) => {
    if ($('#fullName').value.length > 3 && $('#fullName').value.length < 30) {
      $('#fullNameMsg').innerText = 'Name validated!'
      $('#fullNameMsg').classList.remove('text-danger')
      $('#fullNameMsg').classList.add('text-success')
      $('#fullName').classList.remove('is-invalid')
      $('#fullName').classList.add('is-valid')
      areAllValidated.isFullNameValid = true
      setTimeout(() => {
        $('#fullNameMsg').innerText = ''
      }, 2000)
    } else {
      $('#fullNameMsg').innerText = 'Please enter the name!'
      $('#fullNameMsg').classList.remove('text-success')
      $('#fullName').classList.remove('is-valid')
      $('#fullNameMsg').classList.add('text-danger')
      $('#fullName').classList.add('is-invalid')
      areAllValidated.isFullNameValid = false
      setTimeout(() => {
        $('#fullNameMsg').innerText = ''
      }, 2000)
    }
  })

  //validate age
  $('#age').addEventListener('change', (e) => {
    if (
      !isNaN(parseInt($('#age').value)) &&
      parseInt($('#age').value) > 0 &&
      parseInt($('#age').value) <= 99
    ) {
      $('#ageMsg').innerText = 'Age validated!'
      $('#ageMsg').classList.remove('text-danger')
      $('#age').classList.remove('is-invalid')
      $('#ageMsg').classList.add('text-success')
      $('#age').classList.add('is-valid')
      areAllValidated.isAgeValid = true
      setTimeout(() => {
        $('#ageMsg').innerText = ''
      }, 2000)
    } else {
      $('#ageMsg').innerText = 'Age is not correct!'
      $('#ageMsg').classList.remove('text-success')
      $('#age').classList.remove('is-valid')
      $('#ageMsg').classList.add('text-danger')
      $('#age').classList.add('is-invalid')
      areAllValidated.isAgeValid = false
      setTimeout(() => {
        $('#ageMsg').innerText = ''
      }, 2000)
    }
  })

  //validate age range
  $('.form-range').addEventListener('change', (e) => {
    $('#ageMsg').innerText = 'Age validated!'
    $('#ageMsg').classList.remove('text-danger')
    $('#age').classList.remove('is-invalid')
    $('#ageMsg').classList.add('text-success')
    $('#age').classList.add('is-valid')
    areAllValidated.isAgeValid = true
    setTimeout(() => {
      $('#ageMsg').innerText = ''
    }, 2000)
  })

  //validate email
  $('#email').addEventListener('change', (e) => {
    const mailRegExp = new RegExp('[a-zA-Z0-9]+@[a-zA-Z]{3,15}.[a-zA-Z]{2,5}', 'gi')
    if (mailRegExp.test($('#email').value)) {
      $('#mailMsg').innerText = 'Mail validated!'
      $('#mailMsg').classList.remove('text-danger')
      $('#email').classList.remove('is-invalid')
      $('#mailMsg').classList.add('text-success')
      $('#email').classList.add('is-valid')
      areAllValidated.isEmailValid = true
      setTimeout(() => {
        $('#mailMsg').innerText = ''
      }, 2000)
    } else {
      $('#mailMsg').innerText = 'Mail is not correct!'
      $('#mailMsg').classList.remove('text-success')
      $('#email').classList.remove('is-valid')
      $('#mailMsg').classList.add('text-danger')
      $('#email').classList.add('is-invalid')
      areAllValidated.isEmailValid = false
      setTimeout(() => {
        $('#mailMsg').innerText = ''
      }, 2000)
    }
  })

  //Validate height:
  $('#height').addEventListener('keyup', (e) => {
    if (
      !isNaN(parseInt($('#height').value)) &&
      parseInt($('#height').value) >= 45 &&
      parseInt($('#height').value) <= 210
    ) {
      $('.heightMsg').innerText = 'Height validated!'
      $('.heightMsg').classList.remove('text-danger')
      $('#height').classList.remove('is-invalid')
      $('.heightMsg').classList.add('text-success')
      $('#height').classList.add('is-valid')
      areAllValidated.isHeightValid = true
      setTimeout(() => {
        $('.heightMsg').innerText = ''
      }, 2000)
    } else {
      $('.heightMsg').innerText = 'Height is not correct!'
      $('.heightMsg').classList.remove('text-success')
      $('#height').classList.remove('is-valid')
      $('.heightMsg').classList.add('text-danger')
      $('#height').classList.add('is-invalid')
      areAllValidated.isHeightValid = false
      setTimeout(() => {
        $('.heightMsg').innerText = 'Enter number only. Ex:175 ( equal 175cm )'
      }, 2000)
    }
  })

  //Validate weight:
  $('#weight').addEventListener('keyup', (e) => {
    if (
      !isNaN(parseInt($('#weight').value)) &&
      parseInt($('#weight').value) >= 20 &&
      parseInt($('#weight').value) <= 150
    ) {
      $('.weightMsg').innerText = 'Weight validated!'
      $('.weightMsg').classList.remove('text-danger')
      $('#weight').classList.remove('is-invalid')
      $('.weightMsg').classList.add('text-success')
      $('#weight').classList.add('is-valid')
      areAllValidated.isWeightValid = true
      setTimeout(() => {
        $('.weightMsg').innerText = ''
      }, 2000)
    } else {
      $('.weightMsg').innerText = 'Weight is not correct!'
      $('.weightMsg').classList.remove('text-success')
      $('#weight').classList.remove('is-valid')
      $('.weightMsg').classList.add('text-danger')
      $('#weight').classList.add('is-invalid')
      areAllValidated.isWeightValid = false
      setTimeout(() => {
        $('.weightMsg').innerText = 'Enter number only. Ex:55 ( equal 55kg )'
      }, 2000)
    }
  })

  //Validate address
  $('#address').addEventListener('change', (e) => {
    if ($('#address').value.length < 50 && $('#address').value.length > 3) {
      $('#addressMsg').innerText = 'Address validated!'
      $('#addressMsg').classList.remove('text-danger')
      $('#address').classList.remove('is-invalid')
      $('#addressMsg').classList.add('text-success')
      $('#address').classList.add('is-valid')
      areAllValidated.isAddressValid = true
      myTimeout = setTimeout(clearAddressMsg, 2000)
      function clearAddressMsg() {
        $('#addressMsg').innerText = ''
      }
    } else {
      $('#addressMsg').innerText = 'Address is not valid!'
      $('#addressMsg').classList.remove('text-success')
      $('#address').classList.remove('is-valid')
      $('#addressMsg').classList.add('text-danger')
      $('#address').classList.add('is-invalid')
      areAllValidated.isAddressValid = false
      myTimeout = setTimeout(clearAddressMsg, 2000)
      function clearAddressMsg() {
        $('#addressMsg').innerText = ''
      }
    }
  })

  //Set isValidated value (true or false) when click  add user
  $('#mainForm').addEventListener('submit', (e) => {
    e.preventDefault()
    isValidated = Object.values(areAllValidated).every((el) => el)
  })
}
//Assign isValidated to namespace
uiHandler.isValidated = () => {
  return isValidated
}

//Ui show form edit
uiHandler.showFormEdit = function (e) {
  let userId = e.target.parentElement.parentElement.children[0].innerText
  //Get all users from LocalStorage:
  let persons = localSt.getLocalStArr()
  let personChosen = persons.find((el) => el.id === userId)
  // Get info person chosen from store
  personChosen.height = parseFloat(personChosen.height) * 100
  //Show change form to HTML
  $('#changeForm').innerHTML = `
    <h6>You're edit user width id: <span class="user--id">${personChosen.id}</span></h6>
    <label for"changeName">Change name: </label>
      <input class="form-control mt-1 mb-3" type="text" name="changeName" id="changeName" value="${personChosen.name}">
      <label for"changeAge">Change age: </label>
      <input class="form-control mt-1 mb-3" type="number" name="changeAge" id="changeAge" value="${personChosen.age}">
      <label for"changeEmail">Change email: </label>
      <input class="form-control mt-1 mb-3" type="email" name="changeEmail" id="changeEmail" value="${personChosen.email}">
      <select id="changeGender" class="form-select mt-2">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <label class="mt-3" for"changeHeight">Change height(cm): </label>
      <input class="form-control mt-1 mb-3" type="text" name="changeHeight" id="changeHeight" value="${personChosen.height}">
      <label for"changeWeight">Change weight(kg): </label>
      <input class="form-control mt-1 mb-3" type="text" name="changeWeight" id="changeWeight" value="${personChosen.weight}">
      <label for"changeAddress">Change Address: </label>
      <textarea class="form-control" mt-1 mb-3 id="changeAddress">${personChosen.address} </textarea>
      <div class="btn-group mt-3">
        <button data-bs-dismiss="modal"  type="submit" class="btn btn-primary">Save</button>
        <button type="button" class="btn btn-secondary ml-3" data-bs-dismiss="modal" style="margin-left: 5px;">Cancel</button>
      </div>
    `
  if (personChosen.gender === 'male') {
    $('#changeGender').value = 'male'
  } else if (personChosen.gender === 'female') {
    $('#changeGender').value = 'female'
  } else {
    $('#changeGender').value = 'other'
  }
}

//UI reload
uiHandler.reloadBtn = function () {
  location.reload()
}

export default uiHandler

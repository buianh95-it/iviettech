const $ = document.querySelector.bind(document)

class ElectricCalculate {
  constructor() {
    this.areAllValidated = {
      isStartupValidate: false,
      isEndOfTermValidate: false,
    }
    this.validateForm()
  }

  validateForm() {
    $('#startUpPeriod').addEventListener('keyup', () => {
      const startUpPeriod = $('#startUpPeriod').value
      if (!isNaN(parseInt(startUpPeriod)) && parseInt(startUpPeriod) > 0) {
        this.areAllValidated.isStartupValidate = true
        $('#startUpPeriodMsg').innerText = `Validated!`
        $('#startUpPeriodMsg').classList.remove('text-danger')
        $('#startUpPeriodMsg').classList.add('text-success')
      } else {
        this.areAllValidated.isStartupValidate = false
        $('#startUpPeriodMsg').innerText = `Please enter correct value!`
        $('#startUpPeriodMsg').classList.remove('text-success')
        $('#startUpPeriodMsg').classList.add('text-danger')
      }
    })

    $('#endOfTerm').addEventListener('keyup', () => {
      const endOfTerm = $('#endOfTerm').value
      if (!isNaN(parseInt(endOfTerm)) && parseInt(endOfTerm) > 0) {
        this.areAllValidated.isEndOfTermValidate = true
        $('#endOfTermMsg').innerText = `Validated!`
        $('#endOfTermMsg').classList.remove('text-danger')
        $('#endOfTermMsg').classList.add('text-success')
      } else {
        this.areAllValidated.isEndOfTermValidate = false
        $('#endOfTermMsg').innerText = `Please enter correct value!`
        $('#endOfTermMsg').classList.remove('text-success')
        $('#endOfTermMsg').classList.add('text-danger')
      }
    })
  }

  static calculateElectric() {
    const statUpPeriod = $('#startUpPeriod').value
    const endOfTerm = $('#endOfTerm').value
    // Calculate the number of letters:
    const letters = parseInt(endOfTerm) - parseInt(statUpPeriod)
    $('#numberOfLetters').value = letters

    //Calculate the total amount payable
    let total
    const vat = parseInt($('#vat').value)
    switch (true) {
      case letters <= 50:
        total = letters * 1480
        break
      case letters <= 100:
        total = 50 * 1480 + (letters - 50) * 1500
        break
      case letters > 100:
        total = 50 * 1480 + 49 * 1500 + (letters - 99) * 1800
        break
    }
    total = total + total * (vat / 100)
    $('#total').value = total
  }
}

const newElectricCalculate = new ElectricCalculate()

//Calculate when submit
$('#mainForm').addEventListener('submit', (e) => {
  e.preventDefault()
  let isValidate = Object.values(newElectricCalculate.areAllValidated).every(
    (el) => el
  )
  const statUpPeriod = $('#startUpPeriod').value
  const endOfTerm = $('#endOfTerm').value
  if (isValidate && parseInt(endOfTerm) > parseInt(statUpPeriod)) {
    ElectricCalculate.calculateElectric()
  } else {
    alert(
      'Please enter all field with correct number and end of term must > than start up letter value'
    )
  }
})

const log = console.log;
const $ = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);

//Utility namespace:
var myUtility = myUtility || {};
// Generate random ID:
myUtility.generateId = (length = 8) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace(".", "")
  );
};
//Get gender:
myUtility.getGender = () => {
  let genderArr = document.getElementsByName("gender");
  let gender;
  genderArr.forEach((el) => {
    if (el.checked) {
      gender = el.value;
    }
  });
  return gender;
};

//Scroll to top
myUtility.scrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//Clear field
myUtility.clearInput = () => {
  $("#fullName").value = "";
  $("#email").value = "";
  $("#height").value = "";
  $("#weight").value = "";
  $("#address").value = "";
};

//clear output table before add or remove;
myUtility.clearTable = () => {
  while ($("#output").firstChild) {
    $("#output").removeChild($("#output").firstChild);
  }
};

module.exports = myUtility;

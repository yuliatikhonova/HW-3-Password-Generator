// Variable for the button linked to html
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  console.log();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//---------------------------------------------------------------------------

// function for generating the password
function generatePassword() {
  var criteria = userCriteria(length, character);
  var newPassword = criteriaToPassword(criteria);
  return newPassword;
}

// function for setting original user criteria
function userCriteria(lengthInput) {
  var criteriaObject = {
    length: 0,
    character: {
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false
    }
  }

  // setLength: function(lengthInput) {
  //   this.length = lengthInput;
  // }
  return criteriaObject
}

//Prompt to get length
function lengthPrompt() {
  var minLengthAnswer = prompt("Please enter your minimum length");
  var maxLengthAnswer = prompt("Please enter your maximum length");
  var finalLengthForSure = 0;
  if (minLengthAnswer != null) {
    document.getElementById("demo").innerHTML =
      " min LENGTH IS " + minLengthAnswer +
      " max LENGTH IS " + maxLengthAnswer;

    //setLength(lengthAnswer);
  }
}

//function to get the min and max length in one
function lengthRange(max, min) {
  var finalLength = Math.floor(Math.random() * max) + min;
  return finalLength;
}

//Prompt to get characters
function characterPrompt() {
  var isLowerRadio = document.getElementById("lowerRadio");
  var isUpperRadio = document.getElementById("upperRadio");
  var isNumericRadio = document.getElementById("numericRadio");
  var isSpecialRadio = document.getElementById("specialRadio");
}

function criteriaToPassword(criteria) {


}
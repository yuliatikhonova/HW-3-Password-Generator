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
function userCriteria() {
  var criteriaObject = {
    lengthOriginal: 0,
    character: {
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false
    }
  }
}

//Prompt to get length answer from html
function lengthPrompt() {
  var lengthAnswer = prompt("Please enter a number that is between 8 and 128");
  if (lengthAnswer != null) {
    document.getElementById("danswer").innerHTML =
      " Length is " + lengthAnswer;
  } 
  console.log(lengthAnswer)
}

function lengthCriteria() {
  var length() {
    if ()
  } 
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
  // Variable for the button linked to html
var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
function writePassword() {
  console.log();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//---------------------------------------------------------------------------

  // function for generating the password
function generatePassword() {
  var criteria = userCriteria();
  var newPassword = criteriaToPassword(criteria);
  return newPassword;
}

  // (generatePassword function) is calling out this function
function userCriteria(length, lowerCase, upperCase, numeric, special) {
  var criteriaObject = {
    types: {
      lowercase: false,
      uppercase: false,
      numeric: false,
      special: false
    }
  }
}

//
function criteriaToPassword(criteria) {

}
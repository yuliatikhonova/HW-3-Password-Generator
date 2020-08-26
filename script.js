// letiable for the button linked to html
let generateBtn = document.querySelector("#generate");
let charset = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  characters: "!@#$%^&*()_+~`|}{[]\:;?><,./-="
};

let newPassword = "";
let passwordOptions = "";
let passLength= document.getElementById("answer");;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// function for generating the password
function generatePassword() {
  useLower();
  useUpper();
  useNumbers() ;
  useCharacters();
  for (let i = 0, n = passwordOptions.length; i < passLength.value; i++) {
    newPassword += passwordOptions.charAt(Math.floor(Math.random() * n));
  }
  return password = newPassword;
}

// Write password to the #password input
function writePassword() {
  passwordOptions = "";
  newPassword = "";
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//---------------------------------------------------------------------------Characters

let isLowerRadio = document.getElementById("lowerRadio");
let isUpperRadio = document.getElementById("upperRadio");
let isNumericRadio = document.getElementById("numericRadio");
let isSpecialRadio = document.getElementById("specialRadio");

function useLower() {
  if (isLowerRadio.checked) {
    passwordOptions = passwordOptions + charset.lowercase;
  }
}
function useUpper() {
  if (isUpperRadio.checked) {
    passwordOptions = passwordOptions + charset.uppercase;
  }
}
function useNumbers() {
  if (isNumericRadio.checked) {
    passwordOptions = passwordOptions + charset.numbers;
  }
}
function useCharacters() {
  if (isSpecialRadio.checked) {
    passwordOptions = passwordOptions + charset.characters;
  }
}





  



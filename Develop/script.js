// Assignment code here



var characterLength = function() {
  var askCharacterLength = window.prompt("Insert a character length for password. Must be between 8 and 128 characters.");
  if (askCharacterLength < 8) {
    window.prompt("Password must be greater than 8 characters.");
    return characterLength();
  } if else (askCharacterLength > 128) {
    window.prompt("Password must be shorter than 128 characters.");
    return characterLength();
  } else {
    window.prompt("Thank you!");
  }
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt length of password
// set length password

// ask for character types to include in the password
// confirm whether to include lowercase, uppercase, numeric, and/or special characters

// password is generated using the prompts
// password is displayed in an alert or written on the page 
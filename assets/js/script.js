// variables for function to choose from 
var generateBtn = document.querySelector("#generate");
var lowerCharacter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCharacter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialCharacter = ["(", "#", "@", "!", "*", "$"]
var numericalCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var passwordResult = ""
var choice = []

var generateFullPassword = function() {
  return choice[Math.floor(Math.random() * choice.length)];
  };

var passwordLength = function() {
  var passwordLengthAnswer = window.prompt("Insert a character length for password. Must be between 8 and 128 characters.");
  if (isNaN(passwordLengthAnswer) || passwordLengthAnswer === "" || passwordLengthAnswer === null) {
    window.alert("Please enter a valid password.")
    passwordLength();
  }
  if (passwordLengthAnswer < 8) {
    window.alert("Password must be greater than 8 characters.");
    passwordLength();
  }
  if (passwordLengthAnswer > 128) {
    window.alert("Password must be less than 128 characters.");
    passwordLength();
  }
  return passwordLengthAnswer
}

var lowerCharacterPrompt = function () {
  var lowerCharacterAnswer = window.confirm("Would you like to include lower case characters?");
  if (lowerCharacterAnswer === true) {
    choice = choice.concat(lowerCharacter);
  }
  else {
    choice = choice.concat(!lowerCharacterAnswer)
  }
  return lowerCharacterAnswer;

}
var upperCharacterPrompt = function () {
  var upperCharacterAnswer = window.confirm("Would you like to include upper case characters?");
    if (upperCharacterAnswer === true) {
      choice = choice.concat(upperCharacter);
    }
    else {
      choice = choice.concat(!upperCharacterAnswer)
    }
    return upperCharacterAnswer;
}
var numericalCharacterPrompt = function() {
  var numericalCharacterAnswer =  window.confirm("Would you like to include numerical characters?");
  if (numericalCharacterAnswer === true) {
    choice = choice.concat(numericalCharacter);
  }
  else {
    choice = choice.concat(!numericalCharacterAnswer)
  }
  return numericalCharacterAnswer;
}
var specialCharacterPrompt = function() {
  var specialCharacterAnswer = window.confirm("Would you like to include special characters?");
  if (specialCharacterAnswer === true) {
    choice = choice.concat(specialCharacter);
  }
  else {
    choice = choice.concat(!specialCharacterAnswer)
  }
  return specialCharacterAnswer;
}

var findLowercase = function() {
  return lowerCharacter[Math.floor(Math.random() * lowerCharacter.length)];
}

var findUppercase = function() {
  return upperCharacter[Math.floor(math.random() * upperCharacter.length)]
}

var findNumber = function() {
  return numericalCharacter[Math.floor(math.random() * numericalCharacter.length)]
}

var findSymbol = function() {
  return specialCharacter[Math.floor(math.random() * specialCharacter.length)]
}

 function generatePassword() {
  var length = passwordLength();
  var password = '';
  var islower = lowerCharacterPrompt();
  var isupper = upperCharacterPrompt();
  var isspecial = specialCharacterPrompt();
  var isnumber = numericalCharacterPrompt();

  if (!islower && !isupper && !isspecial && !isnumber) {
    window.alert("You must select at least one kind of character!")
    generatePassword();
  }
  for(i=0; i<length; i++) {
    var fullPassword = generateFullPassword();
    password += fullPassword
  }
  return password
};

// Get references to the #generate element


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
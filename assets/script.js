var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = Number(prompt("Enter password length"));
  // Validate the entered password length
  if (isNaN(passwordLength) || passwordLength <= 0) {
    alert("Please enter a valid positive number for password length.");
    return "";
  }

  var specialChar = prompt("Include special characters? (y/n)");
  var lowerCase = prompt("Include lower case? (y/n)");
  var upperCase = prompt("Include upper case? (y/n)");
  var numeric = prompt("Include numeric characters? (y/n)");

  var characters = "";
  var lowerCasecharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var special = "!#$%&()*+,-./:;<=>?@[\\]^_`{|}~";
  var numericCharacters = "1234567890";

  if (specialChar === "y") {
    characters += special;
  }

  if (lowerCase === "y") {
    characters += lowerCasecharacters;
  }

  if (upperCase === "y") {
    characters += upperCharacters;
  }

  if (numeric === "y") {
    characters += numericCharacters;
  }

  var pass = "";

  for (var i = 0; i < passwordLength; i++) {
    var char = Math.floor(Math.random() * characters.length);
    pass += characters.charAt(char);
  }

  return pass;
}

generateBtn.addEventListener("click", writePassword);

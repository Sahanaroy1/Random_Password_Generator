// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/* This function is created to generate a random password with user's input */
function generatePassword() {
  var passwordLength = userInput();
  if (passwordLength) {
    var passwordCharacters = passwordCategory();
    var generatedPassword = "";

    for (var i = 0; i < passwordLength; i++) {
      generatedPassword += passwordCharacters.charAt(
        Math.floor(Math.random() * passwordCharacters.length)
      );
    }
    return generatedPassword;
  }
  alert("Invalid Length. Please try again!");
  return;
}

/* This function is created check the length of the input and datatype is number */
function userInput() {
  var maxPasswordLength = 128;
  var minPasswordLength = 8;
  var passwordLength = prompt(
    "How long do you want your password to be? Minimum - " +
      minPasswordLength +
      " and Maximum - " +
      maxPasswordLength +
      "?"
  );

  if (
    !isNaN(passwordLength) &&
    passwordLength > minPasswordLength &&
    passwordLength <= maxPasswordLength
  ) {
    return passwordLength;
  } else {
    return false;
  }
}

/* This function is created to check the user's choice over alphabet number and special character */
function passwordCategory() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  var numberPref = confirm("Press OK to confirm numbers in your password?");
  var uppercasePref = confirm(
    "Press OK to confirm upper case letter in your password?"
  );
  var lowercasePref = confirm(
    "Press OK to confirm lower case letter in your password?"
  );
  var specialCharPref = confirm(
    "Press OK to confirm special character in your password?" +
      specialChar +
      "."
  );

  if (!numberPref && !uppercasePref && !lowercasePref && !specialCharPref) {
    alert("You must select atleast one character type for your password.");
  }

  var passwordCharacters = "";

  if (uppercasePref) {
    passwordCharacters += uppercase;
  }
  if (lowercasePref) {
    passwordCharacters += lowerCase;
  }
  if (numberPref) {
    passwordCharacters += numbers;
  }
  if (specialCharPref) {
    passwordCharacters += specialChar;
  }

  return passwordCharacters;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

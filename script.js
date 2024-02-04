// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  
  var passwordLength = userInput();
  var passwordCharacters = passwordCategory();
  var generatedPassword = "";

  for(var i = 0; i < passwordLength; i++){
    generatedPassword += passwordCharacters.charAt(Math.floor(Math.random()* passwordLength));   
  }
    return generatedPassword;

}

function userInput(){
  
  var maxPasswordLength = 40;
  var minPasswordLength = 8;

  var passwordLength = prompt("How long do you want your password to be? Minimum - " + minPasswordLength + " and Maximum - " + maxPasswordLength + "?");

  if(isNaN(passwordLength)){
    alert("Please enter a valid number between " + minPasswordLength + " and " + maxPasswordLength + "."); 
  }else if(passwordLength < minPasswordLength && passwordLength > maxPasswordLength){
    alert("The length of your password is not valid! Please enter a valid number between " + minPasswordLength + " and " + maxPasswordLength + ".");
  }else{
    return passwordLength;
  }
  
}

function passwordCategory(){

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  
  var numberPref = confirm("Do you want number in your password?");
  var uppercasePref = confirm("Do you want upper case letter in your password?");
  var lowercasePref = confirm("Do you want lower case letter in your password?");
  var specialCharPref = confirm("Do you want special character in your password?" + specialChar +  ".");



  if(!numberPref && !uppercasePref && !lowercasePref && !specialCharPref){
      alert("You must select atleast one character type for your password.");
  }
   
    var passwordCharacters = "";

  if(uppercasePref){
    passwordCharacters += uppercase;
  }
  if(uppercasePref){
    passwordCharacters += lowerCase;
  }
  if(numberPref){
    passwordCharacters += numbers;
  }
  if(specialCharPref){
    passwordCharacters += specialChar;
  }

  return passwordCharacters;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here
var enter;
var characterAmount;
var lowerCase;
var upperCase;
var numValue;
var specialCharacter;

// password variables:
// special characters
character =["!", "#", "$" ,"%", "&", "(", ",", ")", "*", "+", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

number = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

letter = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var option;

var makeUppercase = function(x) {
  return x.toUpperCase();
};

letterCaps = letter.map(makeUppercase);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelectorAll("password");

  passwordText.value = password;
};

generateBtn.addEventListener("click", function(){

var generatePassword = function() {
  enter = parseInt(prompt("How many characters in password"));

  if (!enter) {
    alert("Please enter a value");
  } else if (enter < 8 || enter > 128) {

    enter = parseInt(prompt("Number must be between 8 - 128"));
  } else {

  lowerCase = confirm("Allow 'lowercase' letters in your password?");
  upperCase = confirm("Allow 'UPPERCASE' letters in your password?");
  numValue = confirm("Allow numbers to be in your password?");
  specialCharacter = confirm("Allow special characters in your password?")
  };

  if (!lowerCase && !upperCase && !numValue && !specialCharacter) {
    option = alert("Choose at least one criteria");
  }
  // if every option is allowed
  else if (lowerCase && upperCase && numValue && specialCharacter) {
    option = character.concat(number, letter, letterCaps)
  }
  // if 3 out 4 options are allowed
  else if (lowerCase && upperCase && numValue) {
  option = letter.concat(letterCapital, number);
  }
  else if (lowerCase && upperCase && specialCharacter) {
    option = letter.concat(letterCaps, character);
  }
  else if (lowerCase && numValue && specialCharacter) {
    option = letter.concat(number, character);
  }
  else if (upperCase && numValue && specialCharacter) {
    option = letterCapital.concat(number, character);
  }
  // if 2 out of 4 options are allowed
  else if (lowerCase && upperCase) {
    option = letter.concat(letterCapital);
  }
  else if (lowerCase && numValue) {
    option = letter.concat(number);
  }
  else if (lowerCase && specialCharacter) {
    option = letter.concat(character);
  }
  else if (upperCase && numValue) {
    option = letterCaps.concat(number);
  }
  else if (upperCase && specialCharacter) {
    option = letterCaps.concat(character);
  }
  else if (numValue && specialCharacter) {
    option = letter.concat(letterCaps);
  }
  // if 1 option is allowed
  else if (lowerCase) {
    option = letter;
  }
  else if (upperCase) {
    option = letterCaps;
  }
  else if (numValue) {
    option = number;
  }
  else if (specialCharacter) {
    option = character;
  }
password = [];


for (var i = 0; i < enter; i++) {
  var pickOptions = option[Math.floor(Math.random() * option.length)];
  JSON.stringify(pickOptions);
  password.push(pickOptions);
}
var ps = password.join("");
UserInput(ps);
return ps;
};

function UserInput(ps) {
  document.getElementById("password").textContent = ps;
}

// Add event listener to generate button

  ps = generatePassword();
document.getElementById("password").placeholder = ps;

});
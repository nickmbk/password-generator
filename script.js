// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function chooseLowerCase() {
  prompt("Do you want lower case letters in your password?");
}

function getPasswordLength() {
  var passwordLengthPrompt = prompt("How many characters do you want your password to be? Choose between 10 and 64: ");
  if (passwordLengthPrompt >=10 && passwordLength <=64) {
    chooseLowerCase();
  }
  else
  if (passwordLengthPrompt < 10) {
    alert("Password must be at least 10 characters long");
  } 
  else
  if (passwordLengthPrompt > 64) {
    alert("Password must be no more than 64 characters long");
  }
  else
  {
    alert("Invalid entry, please enter a number between 10 and 64");
  }
}

// Function to prompt user for password options
function getPasswordOptions() {
  var passwordLength = getPasswordLength();
  var lowerCaseLetters = chooseLowerCase();
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
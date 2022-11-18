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

var passwordOptions = {
  lowercase: false,
  uppercase: false,
  numbers: false,
  specials: false,
  arraySelector: [lowerCasedCharacters, upperCasedCharacters, numericCharacters, specialCharacters],
  passwordLength: 0
}

// Function to prompt user for password options
function getPasswordOptions() {
  passwordOptions.passwordLength = prompt("How many characters do you want your password to be? Choose between 10 and 64: ");
  if (passwordOptions.passwordLength >=10 && passwordOptions.passwordLength <=64) {
    passwordOptions.lowercase = confirm("Do you want lower case letters in your password?");
    passwordOptions.uppercase = confirm("Do you want upper case letters in your password?");
    passwordOptions.numbers = confirm("Do you want numbers in your password?");
    passwordOptions.specials = confirm("Do you want special characters in your password?");
    if (!passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numbers && !passwordOptions.specials) {
      alert("No options were selected");
    }

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

  if (!passwordOptions.lowercase) {
      passwordOptions.arraySelector.splice(0, 1);
  }
  if (!passwordOptions.uppercase) {
      passwordOptions.arraySelector.splice(1, 1);
  }
  if (!passwordOptions.numbers) {
    passwordOptions.arraySelector.splice(2, 1);
  }
  if (!passwordOptions.specials) {
    passwordOptions.arraySelector.splice(3, 1);
  }
  console.log(passwordOptions.arraySelector);
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();

  var buildPassword = "";
  for (var i = 0; i < passwordOptions.passwordLength; i++) {
    var chooseArray = getRandom(passwordOptions.arraySelector);
    buildPassword += getRandom(chooseArray);
  }
  return buildPassword;
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
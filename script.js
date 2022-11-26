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

// object to store password options, most of which are selected by the user
var passwordOptions = {
  // stores whether the user wants to use lower case letters in their password
  lowercase: false,
  // stores whether the user wants to use upper case letters in their password
  uppercase: false,
  // stores whether the user wants to use numbers in their password
  numbers: false,
  // stores whether the user wants to use special characters in their password
  specials: false,
  // used store all the characters the user wants to use in their generated password
  chosenCharacters: [],
  // stores the length of the password the user decides
  passwordLength: 0,
  // tells other parts of the application if the password criteria has been met
  passwordCriteriaMet: false
}

// Function to prompt user for password options
function getPasswordOptions() {
  // assign the passwordCriteriaMet property and chosenCharacter property back to the default in case the user generates another password without refreshing the page
  passwordOptions.passwordCriteriaMet = false;
  passwordOptions.chosenCharacters = [];
  // prompts the user to enter how many characters they want in their password
  passwordOptions.passwordLength = prompt("How many characters do you want your password to be? Choose between 10 and 64: ");
  // if the y select a number between 10 and 64 the rest of the options are presented to the user
  if (passwordOptions.passwordLength >=10 && passwordOptions.passwordLength <=64) {
    // confirm if they waant to use lower case, upper case, numeric and special characters in their password
    passwordOptions.lowercase = confirm("Do you want lower case letters in your password?");
    passwordOptions.uppercase = confirm("Do you want upper case letters in your password?");
    passwordOptions.numbers = confirm("Do you want numbers in your password?");
    passwordOptions.specials = confirm("Do you want special characters in your password?");

    // if the lower case, upper case, numeric and special characters were all declined by the user, display an alert and the application will not continue
    if (!passwordOptions.lowercase && !passwordOptions.uppercase && !passwordOptions.numbers && !passwordOptions.specials) {
      alert("No options were selected");
    } else {
      // otherwise set the passwordCriteriaMet property to true, because all the criteria for the password has been met
      passwordOptions.passwordCriteriaMet = true;
      // check if each character set has been selected for the password, if it has concatenate into the chosenCharacters property, ready for the characters to be generated for the password
      if (passwordOptions.lowercase) {
        passwordOptions.chosenCharacters = passwordOptions.chosenCharacters.concat(lowerCasedCharacters);
      }
      if (passwordOptions.uppercase) {
        passwordOptions.chosenCharacters = passwordOptions.chosenCharacters.concat(upperCasedCharacters);
      }
      if (passwordOptions.numbers) {
        passwordOptions.chosenCharacters = passwordOptions.chosenCharacters.concat(numericCharacters);
      }
      if (passwordOptions.specials) {
        passwordOptions.chosenCharacters = passwordOptions.chosenCharacters.concat(specialCharacters);
      }
    }
  }
  else
  // if the user has entered a number less than 10 alert them
  if (passwordOptions.passwordLength < 10) {
    alert("Password must be at least 10 characters long");
  } 
  else
  // if the user has entered a number over 64 alert them
  if (passwordOptions.passwordLength > 64) {
    alert("Password must be no more than 64 characters long");
  }
  // if the user has entered anything that is not a number, alert them
  else
  {
    alert("Invalid entry, please enter a number between 10 and 64");
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  // return a random number based on the length of the array that is passed to this function (which will be the array we've concatenated in the chosenCharacters property)
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  // run the getPasswordOptions function
  getPasswordOptions();

  // if the passwordCriteriaMet property has been set to true then continue to generate the password 
  if (passwordOptions.passwordCriteriaMet === true) {
    // a variable to store the generated characters, ready to return to the password variable in the writePassword function below
    var buildPassword = "";
    // iterate as many times as the length of the password the user entered at the beginning
    for (var i = 0; i < passwordOptions.passwordLength; i++) {
      // add a randomly generated character to the buildPassword variable by running the getRandom function using the chosenCharacters property as the argument
      buildPassword += getRandom(passwordOptions.chosenCharacters);
    }
    // return the buildPassword variable
    return buildPassword;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // run the generatePassword function and store what is returned in the password variable (in this case it will be the buildPassword variable returned above)
  var password = generatePassword();
  // use a variable to select the id #password in the html document to be able to write the password to the html
  var passwordText = document.querySelector('#password');
  // check if the passwordCriteriaMet property is true to show the generated password in the html (DOM), done this otherwise the password variable will be displayed in the html as 'undefined', this only displays if a password has successfully generated
  if (passwordOptions.passwordCriteriaMet) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
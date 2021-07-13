// Assignment Code
var generateBtn = document.querySelector("#generate");
// storing answers to prompts
var passwordLength
var uppercase
var lowercase
var specialCharacter 
var numbers

//password prompt arrays
var allSpecial = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");
var allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var allLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var allNumbers = "0123456789".split("");
var password = []

//what length between 8 and 128
function userPrompts() {
  passwordLength = prompt('How many characters? Must be between 8 and 128')
  // defined function need to be stored it's in the var
  if (passwordLength < 8) {
    alert('too short!')
    userPrompts()
  } else if (passwordLength > 128){
    alert('too long!')
    userPrompts()
  } else {
    passwordLength
  }

//prompts sc , lc, up, !, numbers
  specialCharacter = confirm('Do you want special characters?') 
  uppercase = confirm('Do you want uppercase?')
  lowercase = confirm('Do you want lowercase?')
  numbers = confirm('Do you want numbers?')
  passwordChoices = []

}

function generatePassword() {

  if (specialCharacter === true) {
    passwordChoices = passwordChoices.concat(specialCharacter);
  }  
  if (uppercase === true) {
    passwordChoices = passwordChoices.concat(uppercase);
  }  
  if (lowercase === true) {
    passwordChoices = passwordChoices.concat(lowercase);
  }  
  if (numbers === true) {
    passwordChoices = passwordChoices.concat(numbers);
  }  

  return passwordChoices
}

function writePassword() {
  userPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);









//  // for (var i =0;i < passwordLength; i++ )
//  {

//   if (specialCharacter===true)
//   {
//     getAllCharacters = getAllCharacters.concat(allSpecial)
//   }
//   //need to to figure out how to pull random numbers from here 

//   if (uppercase===true) {
//    getAllCharacters = getAllCharacters.concat(allUppercase)
//   }

//   if (lowercase===true) {
//    getAllCharacters = getAllCharacters.concat(allLowercase)
//   }

//  if (numbers===true) {
//   getAllCharacters = getAllCharacters.concat(allNumbers)
//   }
// }

//   return getAllCharacters


// }


// //how can i use return to get the result here
// function generatePassword()
//multiple their input times 

//   Math.floor(Math.random * passwordLength)

// }

// for (var i =0;i < howMany; i++ )
//loop through all possible characters * howMany 

// Write password to the #password input

//replace password with the value password 

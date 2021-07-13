// Assignment Code
var generateBtn = document.querySelector("#generate");
// storing answers to prompts
var passwordLength
var uppercase
var lowercase
var specialCharacter 
var numbers


let allSpecial = ['!','@','#','$','%','^','&','*']
let allUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const allLowercase = ['a','b']
const allNumbers = [1,2,3,4,5,6,7,8,9]
var getAllCharacters = []


//what length between 8 and 128
// a function is function name and then ()
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
    //for (passwordLength i = 0;i < passwordLength; i++ )
    //store response in var password length
  }
//prompt for less than 8 characters validation
//prompts sc , lc, up, !, numbers
 
  specialCharacter = confirm('Do you want special characters?') 
  uppercase = confirm('Do you want uppercase?')
  lowercase = confirm('Do you want lowercase?')
  numbers = confirm('Do you want numbers?')


}

function generatePassword() {
  var getPassword = ''
  
  for (var i =0;i < passwordLength; i++ ){

  if (specialCharacter===true)
  {
    getAllCharacters = getAllCharacters.concat(allSpecial)
  }
  //need to to figure out how to pull random numbers from here 

  if (uppercase===true) {
   getAllCharacters = getAllCharacters.concat(allUppercase)
  }

  if (lowercase===true) {
    getAllCharacters = getAllCharacters.concat(allLowercase)
  }

 if (numbers===true) {
    getAllCharacters = getAllCharacters.concat(allNumbers)
  }
}

  return getPassword


}


// //how can i use return to get the result here
// function generatePassword()
//multiple their input times 

//   Math.floor(Math.random * passwordLength)

// }

// for (var i =0;i < howMany; i++ )
//loop through all possible characters * howMany 

// Write password to the #password input

//replace password with the value password 
function writePassword() {
  userPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




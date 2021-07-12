// Assignment Code
var generateBtn = document.querySelector("#generate");
// storing answers to prompts
var passwordLength
var uppercase
var lowercase
var specialCharacter 
var numbers

var possibleSpecial = ['!','@','#','$','%','^','&','*']
var possibleUppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var possilbeLowercase = ['a','b']
var possibleNumbers = [1,2,3,4,5,]
var allPossilbeCharacters = []


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
  }

  
//prompt for less than 8 characters validation
//prompts sc , lc, up, !, numbers
 
  specialCharacter = confirm('Do you want special characters?') 
  uppercase = confirm('Do you want uppercase?')
  lowercase = confirm('Do you want lowercase?')
  numbers = confirm('Do you want numbers?')



  if (specialCharacter===true){
    allPossilbeCharacters= allPossilbeCharacters.concat(possibleSpecial)
  }

  if (uppercase===true) {
   allPossilbeCharacters=allPossilbeCharacters.concat(possibleUppercase)
  }

  if (lowercase===true) {
    allPossilbeCharacters = allPossilbeCharacters.concat(possilbeLowercase)
  }

  if (numbers===true) {
    allPossilbeCharacters = allPossilbeCharacters.concat(possibleNumbers)
  }
}


//how can i use return to get the result here
function generatePassword(){

  Math.floor(Math.random * passwordLength)

}

// for (var i =0;i < howMany; i++ )
//loop through all possible characters * howMany 

// Write password to the #password input

//repalce password with the value password 
function writePassword() {
  userPrompts()
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




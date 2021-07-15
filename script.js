// Assignment Code
var generateBtn = document.querySelector("#generate");

//password prompt arrays
var allSpecial = "!@#%^&*?()<>/-+}{~:;`~".split("");
var allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var allLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var allNumbers = "0123456789".split("");
console.log(allUppercase)
//what length between 8 and 128
function generatePassword() {
  passwordLength = prompt('How many characters? Must be between 8 and 128');
  if (passwordLength < 8) {
    alert('hey now this password is too short.. make it more than 8!');
    generatePassword();
  } else if (passwordLength > 128){
    alert('woah... this password is too long make it less than 128!');
    generatePassword();
  } else {
    passwordLength
  }

//prompts sc , lc, up, !, numbers
  var specialCharacter = confirm('Do you want special characters?') 
  var uppercase = confirm('Do you want uppercase?')
  var lowercase = confirm('Do you want lowercase?')
  var numbers = confirm('Do you want numbers?')
//complete array of chosen prompts appears here 
  var passwordChoices = []
//randomly selected characters based on chosen length appear here  
  var chosenCharacters = []

  if (specialCharacter) {
    passwordChoices = (passwordChoices.concat(allSpecial))

  }  
  if (uppercase) {
    passwordChoices = (passwordChoices.concat(allUppercase))
    
  }  
  if (lowercase) {
    passwordChoices = (passwordChoices.concat(allLowercase))
   
  }  
  if (numbers) {
    passwordChoices = (passwordChoices.concat(allNumbers))
    
  }  
//loops through each confirmed array to pull a random letter
//loop continues based on chosen password length  
  for (var i = 0; i < passwordLength; i++){
    var loopChoice = passwordChoices[Math.floor(Math.random()*passwordChoices.length)]
    chosenCharacters.push(loopChoice)
  }

chosenCharacters = chosenCharacters.join("")
console.log(chosenCharacters)
return chosenCharacters

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

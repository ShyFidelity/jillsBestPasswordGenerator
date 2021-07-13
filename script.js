// Assignment Code
var generateBtn = document.querySelector("#generate");

//password prompt arrays
var allSpecial = "!@#%^&*?()<>/-+".split("");
var allUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var allLowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var allNumbers = "0123456789".split("");
console.log(allUppercase)
//what length between 8 and 128
function generatePassword() {
  passwordLength = prompt('How many characters? Must be between 8 and 128');
  // defined function need to be stored it's in the var
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
//all possible options 
  var passwordChoices = []
//selected based on length  
  var chosenCharacters = []

  if (specialCharacter) {
    passwordChoices = passwordChoices.concat(allSpecial)
    console.log(specialCharacter)
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

  for (var i = 0; i < passwordLength; i++){
    var loopChoice = passwordChoices[Math.floor(Math.random()*passwordChoices.length)]
    chosenCharacters.push(loopChoice)
  }

 //removed commas but now only  1 character comes back!!! 
 //cannot figure out how to write a for loop to pull random numbers from selections 
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

// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = document.getElementById("charCount")
const charBtn = document.getElementById("charBtn")

//the amount in the charCount box (passLength) is not being applied to charAmount
charBtn.addEventListener("click", e => {
  e.preventDefault()})
  var charAmount = +passLength.value

  //this keeps giving me undefined????
console.log(charAmount)

  if ((charAmount >= 8) && (charAmount <= 128)) {

    const upperYes = confirm("Include uppercase?");
    const lowerYes = confirm("Include lowercase?");
    const numbersYes = confirm("Include numbers?");
    const symbolsYes = confirm("Include symbols?");

  }



// Write password to the #password input
function writePassword() {
  var password = generatePassword(charAmount, upperYes, lowerYes, numbersYes, symbolsYes)
 String.fromCharCode(65)
}

function arrayFromLowToHigh(low,high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}


generateBtn.addEventListener("click", e => {
  e.preventDefault()
})



  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  

//trigger series of prompts when button is clicked
function generatePassword(charAmount, upper, lower, numbers, symbols) {
  let charCodes = upperSet
  if (lowerYes) charCodes = charCodes.concat
  (lowerSet)
  if (numbersYes) charCodes = charCodes.concat
  (symbolsSet)
const passwordCharacters = []
  for (let i = 0; i < charAmount, i++)
}
 


  // will not work --> else if {alert("Password must be between 8 - 128 characters")}

//character vars
const symbolsSet = arrayFromLowToHigh (33, 47).concat(
  arrayFromLowToHigh (58, 64).concat(
    arrayFromLowToHigh (91, 96).concat(
      arrayFromLowToHigh (123, 126)
    )
  )
)
const numbersSet = arrayFromLowToHigh (48, 57)
const lowerSet = arrayFromLowToHigh (97, 122)
const upperSet = arrayFromLowToHigh (65, 90)

const randomUpper = upperSet[Math.floor(Math.random * 26 )]
const randomLower = lowerSet[Math.floor(Math.random * 26 )]
const randomNumbers = numbersSet[Math.floor(Math.random * 10)]
const randomSymbols = symbolsSet[Math.floor(Math.random * 8)]

const randomGen = {
  upper: randomUpper,
  lower: randomLower,
  numbers: randomNumbers,
  symbols: randomSymbols
}




//return password;
//}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);




//when the button is clicked

//prompt how many characters

// add value to passLength if within 8-128

//if not alert not within 8-128

//if else confirm 
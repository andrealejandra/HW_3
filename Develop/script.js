// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword()
 }

  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  

//ask for length when button is clicked
function generatePassword() {
  howLong = +prompt("How many characters?");
  //if ((howLong >= 8) && (howLong <= 128));

  var upper = confirm("Include uppercase?");
  var lower = confirm("Include lowercase?");
  var numbers = confirm("Include numbers?");
  var symbols = confirm("Include symbols?");

  // will not work --> else if {alert("Password must be between 8 - 128 characters")}
//character vars
const symbolsSet = ["!", "@", "#", "$", "%", "^", "&", "*"] //8
const numbersSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] //10
const lowerSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //26
const upperSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] //26

const randomUpper = upperSet[Math.floor(Math.random * 26 )]
const randomLower = lowerSet[Math.floor(Math.random * 26 )]
const randomNumbers = numbersSet[Math.floor(Math.random * 10)]
const randomSymbols = symbolsSet[Math.floor(Math.random * 8)]

const randomGen = {
  upper: randomUpper,
  lower: randomLower,
  numbers: randomNumbers,
  symbols: randomSymbols
}}




//return password;
//}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);




//when the button is clicked

//prompt how many characters

// add value to howLong if within 8-128

//if not alert not within 8-128

//if else confirm 
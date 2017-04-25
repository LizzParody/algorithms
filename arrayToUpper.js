//Convert the words in an array to upper case

var myArray = ["melon","banana","apple","orange","lemon"];

function toUpper(arr) {
  return arr.toUpperCase();
}

console.log(myArray.map(toUpper));

//Another way using map method

var myArray = ["melon","banana","apple","orange","lemon"];

var toUpper = myArray.map(function(arr) {
  return arr.toUpperCase();
})

console.log(toUpper);

//Check if a word is palindrome (a word or sentence that's spelled the same way both forward and backward)
function palindrome(word) {
   if (word == word.split("").reverse().join("")){
    return true;
   } else {
    return false;
   }
}

console.log(palindrome("noon"));


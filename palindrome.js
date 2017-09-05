//Check if a word is palindrome (a word or sentence that's spelled the same way both forward and backward)
function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_,.]/g,'');
  len = str.length - 1;
  for(var i = 0; i < len/2; i++){
    if(str[i] !== str[len - i]){
      return false;
    }
  }
  return true;
}

console.log(palindrome("noon"));

//other way
function palindrome(str) {
  var str = str.toLowerCase().replace(/[\W_,.]/g,'');
  var res = str.split('').reverse().join('');
  if(str === res){
	return true;
  }
  return false;
}

palindrome("_eye");



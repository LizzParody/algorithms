//Confirm if a string ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));

//Other way using endsWith method

function endsdWith(str, target) {
  return str.endsWith(n);
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));



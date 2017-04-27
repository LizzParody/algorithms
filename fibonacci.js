//La sucesión de Fibonacci comienza con los números 0 y 1, y a partir de estos,
//«cada término es la suma de los dos anteriores», es la relación de recurrencia que la define.

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var result = (fibonacci(n - 1) + fibonacci(n - 2));
    return result;
  }
}

for (var i = 0; i < 10; i++){
  console.log("The fibonacci of " + i + " is " + fibonacci(i));
}

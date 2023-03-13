// Crea una función que tome un número como entrada y devuelva "Fizz" si el número es divisible por 3, "Buzz" si el número es divisible por 5 o "FizzBuzz" si el número es divisible por ambos.
function divisible(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    }
  }

console.log(divisible(15))
console.log(divisible(50))
console.log(divisible(3))
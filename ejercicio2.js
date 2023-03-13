// Crea una función que tome tres números como entrada y devuelva el número más grande de los tres.

function mayor(num1,num2,num3){
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
 } 

console.log(mayor(2,10,400))
console.log(mayor(200,100,24))
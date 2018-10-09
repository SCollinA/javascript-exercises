// print multiplication table for numbers 1 through 10
// e.g. "1 X 1 = 1"

let number1 = 1// first number starts at 1

while (number1 <= 10) { //while first number is less than 10
    //print(number1)
    let number2 = 1; // second number starts at 1
    while (number2 <= 10) { // while second number is less than 10
        // print(number2)
        console.log(`${number1} X ${number2} = ${number1 * number2}`);// print first number times second number
        number2 += 1; // increment second number
    }
    number1 += 1; // after all multiplications for first number, increment
}
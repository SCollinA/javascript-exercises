// Ask user for number. Print factors of users number.

let bad_input = true; // set flag for asking for user input
const ERROR_MESSAGE = "Bad user input.";// message if bad input received

while (bad_input) { // continue to ask for input until is is int
    try { // prompt user for size of square
        number = Number(prompt("Give me a lumber, any number. "));
        if (isNaN(number)) {
            throw error;
        }
        bad_input = false; //good input received, change flag, except loop
    } catch (error) {
        console.log(ERROR_MESSAGE);//inform user of bad input
    }
}

let factor = 1;
let other_factor = 2;

while (factor < other_factor) { // check all numbers up to half of given number
    if (number % factor == 0) {
        other_factor = number / factor;
        console.log(`${factor}, ${other_factor}`);
    }
    factor += 1;
}
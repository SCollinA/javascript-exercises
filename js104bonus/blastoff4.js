// count down from 10 to 0

bad_input = true; // set flag for asking for user input
ERROR_MESSAGE = "Bad user input.";// message if bad input received

while (bad_input) { // continue to ask for input until is is int
    try { // prompt user for size of square
        var counter = Number(prompt("Enter a countdown no greater than 20: "));
        if (isNaN(counter) || counter > 20) {
            throw error;
        }
        bad_input = false; // good input received, change flag, except loop
    } catch (error) { 
        console.log(ERROR_MESSAGE); // inform user of bad input
    }    
}

while (counter >= 0) {
    console.log(counter);
    counter -= 1;
}

console.log("blast off and stuff. whatever.");
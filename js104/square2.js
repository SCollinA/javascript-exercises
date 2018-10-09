// Print a 5x5 square of * characters

let square_length;

while (true) {
    try {
        square_length = Number(prompt('How big is the square?'));
        if (isNaN(square_length)) {
            throw error;
        }
        break;
    } catch (error) {
        alert('Please enter a number.');
    }
}

let row_counter = square_length; // number of rows

while (row_counter > 0) { // loop through all rows
    let col_counter = square_length; // number of columns
    console.log('*'.repeat(col_counter)); // print one * per col without starting new line
    row_counter -= 1; // decrement rows remaining
}
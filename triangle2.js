// ask user for height. print a triangle with user height using * chars

// ask user for height repeatedly until they give good input
let bad_input = true; // set flag for asking for user input
const ERROR_MESSAGE = "Bad user input."; // message if bad input received

while (bad_input) { // continue to ask for input until is is int
    try { // prompt user for size of square
        var height = Number(prompt("Height? "));
        if (isNaN(height)) {
            throw error;
        }
        bad_input = false; // good input received, change flag, except loop
    } catch (error) {
        alert(ERROR_MESSAGE); // inform user of bad input
    }
}

const ROWS = height; // number of rows of triangle (height)
const COLS = (ROWS * 2) - 1;//number of cols in triangle (width)
let row_counter = 0; // variable to loop through rows

while (row_counter < ROWS) { // while not past last row
    let asterisks = 1 + (2 * row_counter); // number of asterisks on row
    let spaces = COLS - asterisks; // number of spaces on row
    let half_spaces = spaces / 2; // half number of spaces
    //let col_counter = 0 // place on row
    console.log(' '.repeat(half_spaces) + '*'.repeat(asterisks) + ' '.repeat(half_spaces));
    // while (col_counter < COLS) { // while not past last col
    //     if (spaces == end_spaces && asterisks > 0) { // if half of spaces have been printed
    //         console.log('*', end='') // print asterisks
    //         asterisks -= 1 // reduce number of remaining asterisks
    //     } else {
    //         console.log(' ', end='') // print spaces
    //         spaces -= 1 // decrement remaining spaces
    //     }
    //     col_counter += 1 // move to next col
    // }
    row_counter += 1; // move to next row
}
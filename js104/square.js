// Print a 5x5 square of * characters

let row_counter = 5; // number of rows

while (row_counter > 0) { // loop through all rows
    let col_counter = 5; // number of columns
    console.log('*'.repeat(col_counter)); // print one * per col without starting new line
    row_counter -= 1; // decrement rows remaining
}
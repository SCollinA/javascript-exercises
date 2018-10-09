// print a triangle 4 rows high using * chars

const ROWS = 4 // number of rows of triangle (height)
const COLS = (ROWS * 2) - 1//number of cols in triangle (width)
let row_counter = 0 // variable to loop through rows

while (row_counter < ROWS) { // while not past last row
    let asterisks = 1 + (2 * row_counter) // number of asterisks on row
    let spaces = COLS - asterisks // number of spaces on row
    let half_spaces = spaces / 2 // half number of spaces
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
    row_counter += 1 // move to next row
}
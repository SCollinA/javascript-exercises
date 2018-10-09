// Print a 5x5 square of * characters

let boxLength;

while (true) {
    try {
        boxLength = Number(prompt('How big is the box?'));
        if (isNaN(boxLength)) {
            throw error;
        }
        break;
    } catch (error) {
        alert('Please enter a number.');
    }
}

let rowCounter = boxLength; // number of rows

while (rowCounter > 0) { // loop through all rows
    let colCounter = boxLength; // number of columns
    if (rowCounter == boxLength || rowCounter == 1) {
        console.log('*'.repeat(colCounter)); // print one * per col without starting new line
    } else {
        boxContent = '*' + ' '.repeat(colCounter - 2) + '*';
        console.log(boxContent);
    }
    rowCounter -= 1; // decrement rows remaining
}
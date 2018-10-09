// Print a 5x5 square of * characters

let bannerContent;

bannerContent = prompt('Please enter a phrase: ');

let rowCounter = 3; // number of rows

while (rowCounter > 0) { // loop through all rows
    let colCounter = bannerContent.length + 2; // number of columns
    if (rowCounter == 3 || rowCounter == 1) {
        console.log('*'.repeat(colCounter)); // print one * per col without starting new line
    } else {
        banner = '*' + bannerContent + '*';
        console.log(banner);
    }
    rowCounter -= 1; // decrement rows remaining
}
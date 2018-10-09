// ask user for start number
// ask user for end number
// print out numbers from start to end on separate lines

let bad_input = true;
const ERROR_MESSAGE = "Bad user input.";

// # continue to ask for user input until good input recieved
while (bad_input) {
    try { //# ask for user input and catch exception if it is not int
        var start_input = Number(prompt("Start from: "));
        if (isNaN(start_input)) {
            throw error;
        }
        bad_input = false; //# this line reached if input is good, change flag and exit loop
    } catch (error) {
        alert(ERROR_MESSAGE);
    }
}
// //# Reset input flag to ask for end number
bad_input = true;
while (bad_input) { //# ask until an int is received
    try { //# catch expection if non-int received
        var end_input = Number(prompt("End on: "));
        if (isNaN(end_input)) {
            alert('What the hell?');
            throw error;
        }
        if (start_input < end_input) { //# if start is less than end
            bad_input = false; //# change flag, exit loop
        } else { //# if start is not less than end
            alert(ERROR_MESSAGE);
        }
    } catch (error) {
        alert('Error thrown');
    }
}
while (start_input <= end_input) {
    console.log(start_input);
    start_input += 1;
}
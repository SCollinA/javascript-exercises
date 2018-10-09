// // Tell the user you are thinking of a number 1 to 10
// // ask the user to guess
// // user has 5 guesses
// // if they guess right in 5 tries, they win
// // ask them if they would like to play again

// from random import randint

let play = true;

while (play) {
    let guesses = 5;
    random_number = Math.ceil(Math.random() * 10);
    alert("I am thinking of a number between 1 and 10.");

    while (guesses > 0) {
        alert(`You have ${guesses} guesses left`);
        let bad_input = true // set flag for asking for user input
        ERROR_MESSAGE = "Bad user input." // message if bad input received
        while (bad_input) { // continue to ask for input until is is int
            try { // prompt user for size of square
                var guess = Number(prompt("What's the number? "));
                bad_input = false; // good input received, change flag, except loop
                if (guess > 10 || guess < 1) {
                    alert(ERROR_MESSAGE);
                    guesses -= 1;
                    alert(`You have ${guesses} guesses left`);
                }
            } catch (error) { 
                alert(ERROR_MESSAGE); // inform user of bad input
                guesses -= 1;
                alert(`You have ${guesses} guesses left`);
            }
        }
        if (guess == random_number) {
            alert("Yes! You win!");
            guesses = 0; // set guesses to 0 to break out of loop
        } else {
            if (guess > random_number) {
                alert(`${guess} is too high.`);
            } else {
                alert(`${guess} is too low.`);
            }
            guesses -= 1;
            if (guesses == 0) {
                alert("You ran out of guesses!");
                alert(`The number was ${random_number}!`);
            }
        }
    }
    play_again = '';
    while (play_again != 'Y' && play_again != 'N') {
        play_again = prompt('Do you want to play again? ').toUpperCase();
    }
    if (play_again == 'N') {
        play = false;
    }
}
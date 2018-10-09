// User begins with 0 coins. Ask user if they want a coin. If user input is 'yes', give them a coin and print their total. 'No' response ends execution

coins = 0; // user starts with no coins
user_input = true; // user input set to nothing so while loop can begin executing
// ERROR_MESSAGE = "Bad user input." # message to print if user input is not a string

while (user_input) {
    alert(`You have ${coins} coins.`);
    // BAD_INPUT = True
    //while BAD_INPUT:
    //    try:
    user_input = confirm("Do you want another? ");
    // BAD_INPUT = False;
       // except:
       //    print(ERROR_MESSAGE)
    if (user_input) {
        coins += 1;
    } else {
        alert("Bye");
    }
}
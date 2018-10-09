// ERROR_MESSAGE = "User did not input number 0-6"
// # Fill in your code here
// try:
//     day = int(input('Day (0-6)? '))
//     if day > 0 and day < 6:
//         print("Go to work")
//     elif day == 0 or day == 6:
//         print("Sleep in")
//     else:
//         print(ERROR_MESSAGE)
// except:
//     print(ERROR_MESSAGE)

let day;
while (true) {
    try {
        day = Number(prompt('Day (0-6)? '));
        if (isNaN(day)) {
            throw error;
        }
        break;
    } catch (error) {
        alert('Please enter a number 0-6.');
    }
}

if (day == 0 || day == 6) {
    console.log('Sleep in...');
} else {
    console.log('Go to work!');
}
// ERROR_MESSAGE = "User did not input a number."

// try:
//     degrees_celsius = int(input("Temperature in C? "))
//     degrees_fahrenheit = degrees_celsius * 1.8 + 32
//     print("%.1f F" % degrees_fahrenheit)
// except:
//     print(ERROR_MESSAGE)

let degrees_celsius;
let degrees_fahrenheit;
while (true) {

    try {
        degrees_celsius = Number(prompt('Temperature in C?'));
        if (isNaN(degrees_celsius)) {
            throw error;
        }
        break;
    } catch (error) {
        alert('Please enter digits 0-9.');
    }

}

degrees_fahrenheit = degrees_celsius * 1.8 + 32;
console.log(`Temperature is ${degrees_fahrenheit}`);
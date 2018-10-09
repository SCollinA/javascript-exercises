// Print out first 100 triangle numbers. A triangle number is a number of dots which could be arranged into a triangle. The formula for a triangle number is x sub n = n(n + 1)/2. For example, the 30th triangle number is x sub 30 = 30(30 + 1)/2 = 465

let number = 1;

while (number <= 100) {
    triangle_number = number * (number + 1) / 2;
    console.log(`Triangle number ${number} is ${triangle_number}`);
    number += 1;
}
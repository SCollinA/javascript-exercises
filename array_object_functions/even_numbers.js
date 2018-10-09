// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function positive_numbers(numArray) {
    newArray = numArray.filter(num => num % 2 == 0)
    return newArray
}

sampleArray = [1, 2, 3, -1, -2, -3];

console.log(positive_numbers(sampleArray));

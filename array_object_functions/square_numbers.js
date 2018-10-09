// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function positive_numbers(numArray) {
    numArray.forEach((num, index, arr) => {
        arr[index] = num * num
    })
    return numArray
}

sampleArray = [1, 2, 3, -1, -2, -3];

console.log(positive_numbers(sampleArray));

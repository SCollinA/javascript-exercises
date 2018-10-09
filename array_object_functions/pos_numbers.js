// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

function positive_numbers(numArray) {
    numArray.filter((num, index, arr) => {
        if (num % 2 == 0) {
            delete arr[index];
        }
    })
    return numArray
}

sampleArray = [1, 2, 3, 4, 5, 6];

positive_numbers(sampleArray);
console.log(sampleArray);
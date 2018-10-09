// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:
// You are allowed to use a loop in the implementation of callNTimes.


function callNTimes(numTimes, fun) {
    for(i = 0; i < numTimes; i++) {
        fun()
        console.log('')
    }
}

callNTimes(5, () => console.log("Hello, world"))
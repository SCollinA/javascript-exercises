// print only odd numbers from 1 to 10, inclusive

let counter = 1 //# set starting point
const STOP = 10 //# set stopping point

while (counter <= STOP) { //# continue until counter reaches 10
    if (counter % 2 != 0) { //# if counter is not divisible by 2 (odd)
        console.log(counter)
    }
    counter += 1 //# increment counter
}
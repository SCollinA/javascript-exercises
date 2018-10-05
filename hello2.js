let name = prompt('What is your name? ');

let name = name.toUpperCase();

console.log(`hello ${name}`);

function nameLengthString(strings, nameLength) {

    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];
  
    return `Your name has ${nameLength} letters in it. Awesome!`
}

let output = nameLengthString`${name.length}`;

console.log(output)
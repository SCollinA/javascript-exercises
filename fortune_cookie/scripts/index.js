console.log('Yep, I am here');
// Classes for styling
// "data attributes" for JS

// run code on button click
// show text on click
// pull data from array to provide text
let buttonTrigger = document.querySelector('[data-trigger]');

let divQuote = document.querySelector('[data-output]');

let sadFacts = [
    'Grizzlies have been known to abandon their cubs.',
    'Humans killed the world\'s oldest animal.',
    'Pluto didn\'t even get a birthday as a planet (i.e., make a full orbit around the sun).',
    'Pigs can get depressed.',
    'CPR doesn\'t usually work.',
    'Scientists have found the loneliest whale.',
    'The more you know, the worse it gets.'
];
// addEventListener accepts string for kind of event
// and function to execute on event
buttonTrigger.addEventListener('click', hello);

let i = 0;

function hello() {
    let sadFact = sadFacts.pop();
    console.log(`Hello addEventListener ${i}`);
    divQuote.textContent = `${sadFact}`;
    sadFacts.unshift(sadFact);
}
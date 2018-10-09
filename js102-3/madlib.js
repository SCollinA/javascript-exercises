// prompt the user for words 
// fill words into madlib template

function madLib(adjective, noun, verb, adverb) {
    return `The ${adjective} ${noun} ${verb} ${adverb}`
}

let adjective = prompt(`Give me an adjective: `)
let noun = prompt(`Give me a noun: `)
let verb = prompt(`Give me a verb: `)
let adverb = prompt(`Give me an adverb: `)

console.log(madLib(adjective, noun, verb, adverb))
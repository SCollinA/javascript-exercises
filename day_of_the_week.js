while (true) {
    try {
        let day = Number(prompt(`Day (0-6)? `));
    } catch (error) {
        alert(`Please enter a number.`)
    }
}
console.log(day)
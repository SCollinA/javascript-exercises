let day = 0;

while (true) {
    try {
        day = Number(prompt(`Day (0-6)? `));
        if (isNaN(day) || day > 6 || day < 0) {
            throw error;
        }
        break
    } catch (error) {
        alert(`Please enter a number.`)
    }
}

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(days[day])
// ERROR_MESSAGE = "Bad user input."
// try:
//     total_bill = float(input("Total bill amount? "))
//     service_level = input("Level of service? ")
//     print(service_level)
//     if service_level == "good":
//         percent_tip = .20
//     elif service_level == "fair":
//         percent_tip = .15
//     elif service_level == "bad":
//         percent_tip = .10
//     else:
//         percent_tip = 1.0
//     tip_amount = total_bill * percent_tip
//     total_amount = total_bill + tip_amount
//     print("Tip amount: $%.2f" % tip_amount)
//     print("Total amount: $%.2f" % total_amount)
// except:
//     print(ERROR_MESSAGE)    

let total_bill;
let service_level;
let service_levels = ['poor', 'fair', 'good'];
let percent_tips = [0.1, 0.15, 0.2];

while (true) {
    try {
        total_bill = Number(prompt('Total bill amount?'));
        if (isNaN(total_bill)) {
            throw error
        }
        service_level = prompt('Level of service? (poor, fair, good)').toLowerCase();
        if (!service_levels.includes(service_level)) {
            throw error;
        }
        break;
    } catch (error) {
        alert('Please enter a number for bill amound and poor, fair, or good for service level.');
    }
}

let tip_amount = total_bill * percent_tips[service_levels.indexOf(service_level)];
let total_amount = total_bill + tip_amount;

console.log(`Tip amount: ${tip_amount}`);
console.log(`Total amount: ${total_amount}`);
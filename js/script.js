/*let miles;
let gallons;
let mpg;
let again = 'y';

do {
    miles = parseFloat(prompt('Enter miles driven'));
    gallons = parseFloat(prompt('How many gallons does your car\'s tank hold'));
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons;
        console.log(`Your car gets ${mpg.toFixed(2)} miles per gallon.`);
    } else {
        alert('One or both entries are invalid.');
    }
    again = prompt('Run application again? (y or n)', 'y');
    
 // Validate that entry. If it’s anything other than “y” or “n”, 
 //the prompt should simply reappear until the user enters a valid entry.
    while(again!=='y' && again!=='n'){
        again = prompt('Please enter (y or n) to run application again', 'y');
    }
} while (again === 'y');
console.log('Application has exited.');*/



// GLOBAL VARIABLES
let futureValue;
let investment = parseInt(prompt("Enter your investment amount:"));

// validate those entries. Within investment, the number should be numeric. 
//Within rate, the number should be numeric and between 0 and a realistic rate like 6%.
// For years, the number should be numeric and between 1 and 30.

console.log(`IntitialEnter invesetment ${investment}`)
while (isNaN(investment)) {
    investment = parseInt(prompt("Invalid investment amount. Please enter a numeric value."));
    console.log(`Enter invesetment ${investment}`)
}
let rate = prompt("Enter the interest rate (between 0 and 6%):");
// Validate rate (numeric and within 0-6%)
while (isNaN(rate) || rate < 0 || rate > 6) {
    rate = prompt("Invalid interest rate. Please enter a numeric value between 0 and 6%.");
}
let years = prompt("Enter the number of years (between 1 and 30):");
// Validate years (numeric and within 1-30)
while (isNaN(years) || years < 1 || years > 30) {
    years = prompt("Invalid number of years. Please enter a numeric value between 1 and 30.");
}

futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment}<br>`);
document.write(`Interest rate: ${rate}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue}`);




// Function to perform the selected operation
const calculate = (num1, num2, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error! Division by zero.";
            }
            break;
        default:
            result = "Invalid operator!";
    }
    return result;
}

// Test the calculator
let num1 = 10;
let num2 = 5;

console.log(`Addition: ${calculate(num1, num2, '+')}`);
console.log(`Subtraction: ${calculate(num1, num2, '-')}`);
console.log(`Multiplication: ${calculate(num1, num2, '*')}`);
console.log(`Division: ${calculate(num1, num2, '/')}`);

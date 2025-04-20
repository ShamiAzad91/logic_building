const checkArmstrongNo = (num) => {
    let temp = num;
    let count_digit = 0;
    let sum = 0;

    // Count the number of digits
    while (temp !== 0) {
        count_digit++;
        temp = parseInt(temp / 10);
    }

    console.log(`Number of digits in ${num} is ${count_digit}`);

    temp = num;

    // Calculate sum of digits raised to the power of count_digit
    while (temp !== 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, count_digit);
        temp = parseInt(temp / 10);
    }

    // Final check
    if (sum === num) {
        console.log(`${num} is an Armstrong number`);
    } else {
        console.log(`${num} is not an Armstrong number`);
    }
};

// 
checkArmstrongNo(371); // Armstrong
checkArmstrongNo(123); // Not Armstrong

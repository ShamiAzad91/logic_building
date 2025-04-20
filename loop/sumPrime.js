const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const sumOfPrimes = (n) => {
    let sum = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
};

// Example usage:
const n = 20;
const result = sumOfPrimes(n);
console.log(`The sum of all prime numbers from 1 to ${n} is: ${result}`);

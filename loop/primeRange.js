const printPrimesUpTo = (n) => {
    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(num);
        }
    }
}

// Example usage:
printPrimesUpTo(50); // Prints all prime numbers from 1 to 50


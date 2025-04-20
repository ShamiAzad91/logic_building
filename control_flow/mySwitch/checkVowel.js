const checkVowelOrConsonant = (char) => {
    // Convert to lowercase for easy comparison
    char = char.toLowerCase();

    // Check if it's a single alphabet character
    if (!(/[a-z]/).test(char)) {
        return `${char} is not a valid alphabet`;
    }

    // Use switch to check for vowel
    switch (char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return `${char} is a vowel`;

        default:
            return `${char} is a consonant`;
    }
};

// Test
let result = checkVowelOrConsonant('E');
console.log(result);

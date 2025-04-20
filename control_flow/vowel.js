const checkVowelOrConsonant = (char) => {
    // Convert to lowercase to simplify comparison
    char = char.toLowerCase();

    // Check if it's an alphabet
    if (!(/[a-zA-Z]/).test(char)) {
        return `${char} is not an alphabet`;
    }

    // Check for vowel
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        return `${char} is a vowel`;
    } else {
        return `${char} is a consonant`;
    }
}

// Test
let ch = 'E';
console.log(checkVowelOrConsonant(ch));

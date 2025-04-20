const isAlphabet = (char) => {
    let code = char.charCodeAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return true;
    } else {
        return false;
    }
}

// Test
let ch = 'A';
if (isAlphabet(ch)) {
    console.log(`${ch} is an alphabet.`);
} else {
    console.log(`${ch} is not an alphabet.`);
}

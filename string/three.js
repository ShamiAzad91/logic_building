// Find reverse of a string
// let str1 = "hello";
// let reversed =  str1.split("").reverse().join("");
// console.log(reversed);//olleh

// Check palindrome
// let str1 = 'mom';
// let revresed = str1.split('').reverse().join('');
// if(str1 === revresed){
//     console.log("palindrom");
    
// }else{
//     console.log('not palindrome');
    
// }


// // Reverse order of words
// let str1 = "Hello Programming world";
// let str2 = str1.split(' ').reverse().join(' ');
// console.log(str2);


// Search a character in string
// let str = "programmer breath";
// let charToFind = "r";

// for(let i = 0;i<str.length;i++){
//     if(str[i] === charToFind){
//         console.log(`found ${charToFind} at index${i}`);
        
//     }
// }


// Search a word in string
let sentence = "Hello Programmer Breath";
let word = "programmer";
// let word = "programmers";

if(sentence.toLowerCase().includes(word)){
    console.log(`${word} found in sentence`);
    
}else{
    console.log(`${word} not found in sentence`);


}
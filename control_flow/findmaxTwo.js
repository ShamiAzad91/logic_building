// program to find maximum between two numbers
// function findmaxTwoNo(num1,num2){
//     let result = 0;
//     if(num1>num2){
//         result = num1;
//     }else{
//         result = num2;
//     }
//     return result
// }

// let result = findmaxTwoNo(12,30);
// console.log(`greatest no is ${result}`);

// let findGreater = function(num1,num2){
//     let result = 0;
//     if(num1>num2){
//         result = num1
//     }else{
//         result = num2;
//     }
//     return result
// }

const findGreater = (num1,num2)=>{
    let result = 0;
        if(num1>num2){
            result = num1
        }else{
            result = num2;
        }
        return result 
}

let result = findGreater(12,6);
console.log(`result  is ${result}`);

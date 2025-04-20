// Find maximum of three numbers
const maxThree = function(num1,num2,num3){
    let result = 0;
    if(num1>num2){
        if(num1>num3){
            result = num1
        }else{
            result =num3;
        }
    }else{
        if(num2>num3){
            result  = num2;
        }else{
            result = num3;
        }
    }
   return result
}

let result = maxThree(12,24,33);
console.log(`max of three no is ${result}`);

// Print even numbers from 1 to n
const printIsEven = function(num){
    for (let i = 2; i<=num; i++) {
        if(i%2 === 0){
            console.log(i);
            
        }
        
    }
}

printIsEven(10);
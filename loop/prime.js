// const checkPrime  = (num)=>{
//     let isPrime = 1;

//     for(let i = 2;i<=num-1;i++){
//         if(num%i == 0){
//             isPrime = 0;
//             break;
//         }
//     }
//     if(isPrime == 1){
//         console.log("prime")
//     }else{
//         console.log("no is not prime")
//     }

// }

// checkPrime(7)

// program to check whether a number is Prime number or not.
const checkPrime  = (num)=>{
    let isPrime = 1;

    for(let i = 2;i<=num-1;i++){
        if(num%i == 0){
            isPrime = 0;
            break;
        }
    }
    isPrime = (isPrime == 1) ? `${num} no is prime` :`${num} no is not prime`
   return isPrime
}

const result = checkPrime(7);
console.log(`the given ${result}`);


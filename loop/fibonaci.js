// program to print Fibonacci series up to n terms.

const getFibonaciSeries = (num)=>{
    let a = 0;
    let b = 1;
    let c = 0;
console.log(`fibonaci series is here :`);

    for(let i = 1;i<=num;i++){
        console.log(c);
        a = b;
        b=c;
        c = a + b;

    }
}

getFibonaciSeries(10);
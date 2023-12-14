// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
// const x = num.sort((a,b) => {
//     return a - b
// })

// console.log(x)

// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const x = num.reduce((acc, curr) => {
    
//     return (acc > curr) ? curr : acc


// })

// console.log(x)

const fibo = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }

    return fibo(nbr -1 ) + fibo(nbr -2)

    // let a = 0;
    // let b = 1;

    // for(let i = 2; i<= nbr; i++ ){

    //     let res = a + b;
    //     a = b;
    //     b = res;

    // }

    // return b;


}

console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))
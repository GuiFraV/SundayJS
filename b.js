// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
// const x = num.sort((a ,b) => {
//     return a-b;
// })

// console.log(x)

// 0, 1, 1, 2, 3, 5 , 8, 13, 21, 34

const fib = (nbr) => {

    if(nbr <= 1){
        return nbr
    }

    return fib(nbr - 1) + fib(nbr - 2);

    // let a = 0;
    // let b = 1;

    // for(let i = 2; i<nbr; i++){

    //     let temp = a + b;
    //     a = b;
    //     b = temp;

    // }

    // return b;


}

console.log(fib(7))
const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

const transposed = (arr) => {

    let rows = arr.length;
    let cols = arr[0].length;
    let t = [];

    for(let j = 0 ; j < cols; j++){

        t[j] = [];

        for(let i = 0 ; i < rows; i++){
            t[j][i] = arr[i][j];
        }
    }

    return t;
}

// console.log(transposed(matrix));

const optiPrimeNumber = (nbr) => {


    if(nbr <= 1){
        return false;
    }

    if(nbr <= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }

    let i = 5;

    while(i * i <= nbr){

        if(nbr % i === 0 || nbr % (i + 2) === 0){
            return false;
            i += 6;
        }
    }

    return true;

} 

// console.log(optiPrimeNumber(1))
// console.log(optiPrimeNumber(2))
// console.log(optiPrimeNumber(3))
// console.log(optiPrimeNumber(4))
// console.log(optiPrimeNumber(5))
// console.log(optiPrimeNumber(6))
// console.log(optiPrimeNumber(7))
// console.log(optiPrimeNumber(8))
// console.log(optiPrimeNumber(9))

const fib = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }
    return fib(nbr - 1) + fib(nbr - 2);
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
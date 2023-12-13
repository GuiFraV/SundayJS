const fib = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }

    return fib(nbr - 1) + fib(nbr - 2);

}

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
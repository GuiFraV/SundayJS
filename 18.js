// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function Fibonacci(nbr){

    if(nbr <= 1){
        return nbr;
    }

    return Fibonacci(nbr - 1) + Fibonacci(nbr - 2)



}

console.log(Fibonacci(1))
console.log(Fibonacci(2))
console.log(Fibonacci(3))
console.log(Fibonacci(4))
console.log(Fibonacci(5))
console.log(Fibonacci(6))
console.log(Fibonacci(7))
console.log(Fibonacci(8))
console.log(Fibonacci(9))
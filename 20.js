// 0, 1, 1, 2, 3, 5 , 8, 13, 21, 34

function Fibonacci(nbr){

    if(nbr <= 1){
        return nbr
    }

    let a = 0
    let b = 1

    for(let i = 2; i < nbr; i++){

        let res = a + b;
        a = b;
        b = res

    }

    return b;


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
console.log(Fibonacci(10))
console.log(Fibonacci(11))
console.log(Fibonacci(12))
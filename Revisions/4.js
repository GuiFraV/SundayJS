// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibo(nbr){
    if(nbr <= 1){
        return nbr;
    }
    return fibo(nbr - 1) + fibo(nbr -2)
}

console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))
console.log(fibo(9))
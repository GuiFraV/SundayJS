// 2, 3, 5, 7, 11, 13, 17, 19,

const isPrime = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    for(let i = 2; i< nbr; i++){
        if(nbr % i === 0){
            return false;
        }
    }

    return true;


}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(4))
console.log(isPrime(4))
console.log(isPrime(7))
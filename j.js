// 2, 3, 5, 7, 11, 13, 17, 19

function isPrime(nbr){

    if(nbr <= 1){
        return false;
    }

    if(nbr <= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }

    i = 5;

    while(i * i <= nbr){

        if(nbr % i === 0 || nbr % (i + 2) === 0){

            return false

        }
        i+= 5

    }

    return true;

}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(17))
console.log(isPrime(19))
console.log(isPrime(20))
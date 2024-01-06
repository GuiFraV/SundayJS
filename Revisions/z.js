const primeNumber = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    for(let i = 2 ; i < nbr; i++){

        if(nbr % i === 0){
            return false;
        }

    }

    return true;
}

console.log(primeNumber(2))
console.log(primeNumber(3))
console.log(primeNumber(4))
console.log(primeNumber(5))
console.log(primeNumber(6))
console.log(primeNumber(7))
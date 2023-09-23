// 2, 3, 5, 7, 11, 13, 17, 19
const isPrime = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    if (nbr <= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }

    let i = 5;
    while(i * i <= nbr){

        if(nbr % i === 0 || nbr % (i + 2) === 0){

            return false;


        }
        i += 6;

    }

    return true



}

console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(11))
console.log(isPrime(4))
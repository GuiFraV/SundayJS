function nombrePremier(nbr){

    let isPrimeNumber = true;

    if(nbr <= 1 ){
        return false;
    }

    for(let i = 2; i< nbr ; i++){

        if(nbr % i === 0){

            return false;

        }

    }

  return true;



}

console.log(nombrePremier(5))



// Version Optimale

function isPrime(nbr)  {

    if(nbr <= 1){
        return false;
    }

    if (nbr <= 3) {
        return true
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }


    let i = 5;
    while (i * i <= nbr) {
        if(nbr % i === 0 ||nbr % (i + 2) === 0){
            return false;
        }

        i += 6
    }

    return true;




}
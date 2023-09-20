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
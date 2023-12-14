const Palin = (mot) => {

    let isPalin = true;

    for(let i = 0 ; i< mot.length; i++){

        if(mot[i] !== mot[mot.length - 1 -i]){
            isPalin = false;
        }
    }


    return isPalin;  


}

console.log(Palin('kayakqsdqsdqsd'))
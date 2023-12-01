const Fibo = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }

    let a = 0;
    let b = 1;

    for(let i = 0 ; i < nbr; i++){
        let res = a + b;
        a = b;
        b = res;
    }

    return b;
}

console.log(Fibo(1))
console.log(Fibo(2))
console.log(Fibo(3))
console.log(Fibo(4))
console.log(Fibo(5))
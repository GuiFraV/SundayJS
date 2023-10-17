// 0, 1, 1, 2, 3, 5 , 8, 13, 21, 34

const Fibo = (nbr) =>  {

    if(nbr <= 1){
        return nbr
    }

    let a = 0;
    let b = 1;

    for(let i = 2; i<= nbr; i++){

        let result = a + b;
        a = b;
        b = result;
    }

    return b;

}

console.log(Fibo(1))
console.log(Fibo(2))
console.log(Fibo(3))
console.log(Fibo(4))
console.log(Fibo(5))
console.log(Fibo(6))
console.log(Fibo(7))
// 1, 2, 3, 5, 8, 13, 21 et 34

function Fibonacci(nbr){

    if(nbr === 1){
        return nbr 
    }

    let a = 0;
    let b = 1;
 
    for(let i = 2 ; i <= nbr ; i++ ){

        let temp = a + b
        a = b
        b = temp
         


    }

    return b;


}

console.log(Fibonacci(8))
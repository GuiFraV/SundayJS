// 1, 2, 3, 5, 8, 13, 21 et 34

// function Fibonacci(nbr){

//     if(nbr === 1){
//         return nbr 
//     }

//     let a = 0;
//     let b = 1;
 
//     for(let i = 2 ; i <= nbr ; i++ ){

//         let temp = a + b
//         a = b
//         b = temp
         


//     }

//     return b;


// }

function Fibonacci(nbr) {
    if (nbr <= 1) {
        return nbr;
    }
    return Fibonacci(nbr - 1) + Fibonacci(nbr - 2);
}

console.log(Fibonacci(8)); // 21
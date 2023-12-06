// const isPrime = (nbr) => {


//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i < nbr ; i++){

//         if(nbr % i === 0 ){
//             return false;
//         }

//     }

//     return true;

// }


// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(8))





const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]


const transposedMatrix = (arr) => {


    let rows = arr.length;
    let cols = arr[0].length;
    let transposed = [];


    for(let j = 0 ; j < cols; j++){
        transposed[j] = [];
        for(let i = 0 ; i < rows; i++){
            transposed[j][i] = arr[i][j];
        }

    }

    return transposed;

}



console.log(transposedMatrix(matrix))
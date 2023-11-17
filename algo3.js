// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// const transposed = (m) => {
//     let rows = m.length;
//     let cols = m[0].length;
//     let transpo = [];

//     console.log(cols)

//     for(let j = 0 ; j < cols ; j++){
//         transpo[j] = [];

//         console.log(transpo[j])
//         for(let i = 0 ; i < rows; i++){
//             transpo[j][i] = m[i][j]
//             console.log(transpo[j][i])
//         }
//     }

//     return transpo;
// }

// console.log(transposed(matrix));

// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 6, -1, 10, 11];

// function validateSub(arr, seq){

//     let arrIdx = 0;
//     let seqIdx = 0;

//     while(arrIdx < arr.length && seqIdx < seq.length){
//         if(arr[arrIdx] !== seq[seqIdx]){
//             arrIdx++
//         }else{
//             seqIdx++
//         }
//     }
//     return seqIdx === seq.length;
// }

// console.log(validateSub(array, sequence))

// 2, 3, 5, 7, 11, 13, 17, 19

const primeNumber = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    if(nbr <= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }

    let i = 5;

    while( i * i <= nbr){
        if(nbr % i === 0 || nbr % (i + 2) === 0){
            return false;
        }
        i+= 6;
    }
    return true;
}

console.log(primeNumber(1))
console.log(primeNumber(2))
console.log(primeNumber(3))
console.log(primeNumber(4))
console.log(primeNumber(5))
console.log(primeNumber(6))
console.log(primeNumber(7))
console.log(primeNumber(8))
console.log(primeNumber(88))
console.log(primeNumber(99))
console.log(primeNumber(100))
console.log(primeNumber(12))
console.log(primeNumber(13))
console.log(primeNumber(14))
console.log(primeNumber(17))
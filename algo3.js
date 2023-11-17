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

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10, 11];

function validateSub(arr, seq){

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){
        if(arr[arrIdx] !== seq[seqIdx]){
            arrIdx++
        }else{
            seqIdx++
        }
    }
    return seqIdx === seq.length;
}

console.log(validateSub(array, sequence))
// // 2, 3, 5, 7, 11, 13, 17, 19,

// const isPrime = (nbr) => {

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i< nbr; i++){
//         if(nbr % i === 0){
//             return false;
//         }
//     }

//     return true;


// }

// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(4))
// console.log(isPrime(4))
// console.log(isPrime(7))


array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function validateSubsequence(arr, seq){

    let arr_idx = 0;
    let seq_idx = 0;

    while(arr_idx < arr.length && seq_idx < seq.length ){

        if(arr[arr_idx] === seq[seq_idx]){

            arr_idx++


        }else{

            seq_idx++

        }


    }

    return seq_idx === seq.length;



}

console.log(validateSubsequence(array, sequence))
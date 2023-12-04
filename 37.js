// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 6, -1, 10];

// const validateSubsequence = (arr, seq) => {

//     let arrIdx = 0;
//     let seqIdx = 0;

//     while(arrIdx < arr.length && seqIdx < seq.length){

//         if(arr[arrIdx] !== seq[seqIdx]){

//             arrIdx++;
//         }else{
//             seqIdx++;
//         }
//     }


//     return seqIdx === seq.length;

// }

// console.log(validateSubsequence(array, sequence));


const isPrime = (nbr) => {

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

    while( i * i < nbr){
        if(nbr % i === 0 || nbr % (i + 2) === 0){
            return false;
        }
    }

    return true;

}

console.log(isPrime(2))
console.log(isPrime(2))
console.log(isPrime(2))
console.log(isPrime(5))
console.log(isPrime(7))
console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(17))
console.log(isPrime(19))
console.log(isPrime(20))
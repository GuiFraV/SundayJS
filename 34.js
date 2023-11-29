// const fibo = (nbr) => {

//     if(nbr <= 1){
//         return nbr;
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 0; i< nbr ; i++){
//         let res = a + b;
//         a = b;
//         b = res;
//     }
//     return b;
// }

// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10, 23];

const validateSubsequence = (array, sub) => {

    let arrIdx = 0;
    let subIdx = 0;

    while(arrIdx < array.length && subIdx < sub.length){

        if(array[arrIdx] !== sub[subIdx]){
            arrIdx++;
        }else{
            subIdx++;
        }
    }
    return subIdx == sequence.length;
} 

console.log(validateSubsequence(array, sequence));
// array = [5, 1, 22, 25, 6, -1, 8, 10]
// sequence = [1, 6, -1, 10]

// function validateSubsequence(arr, sequence){

//     let a = 0;
//     let b = 0;

//     while(a < arr.length && b < sequence.length){

//         if(arr[a] === sequence[b]){
//             b++
//         }else{
//             a++
//         }

        
        
//     }
    
//     return b === sequence.length;

// }

// console.log(validateSubsequence(array, sequence))

const fibo = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }

    let a = 0;
    let b = 1;

    for(let i = 2; i<nbr; i++){
        let res = a + b;
        a = b;
        b = res;
    }

    return b;

}

console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(4))
console.log(fibo(5))
console.log(fibo(6))
console.log(fibo(7))
console.log(fibo(8))
console.log(fibo(9))
console.log(fibo(10))
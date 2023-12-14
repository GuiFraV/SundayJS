// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
// const x = num.sort((a, b) => {
//     return a-b
// }) 

// console.log(x)

// 0, 1, 1, 2, 3, 5, 8, 13, 21 et 34

// function fibo(nbr){

//     if(nbr <= 1){
//         return nbr
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 2; i< nbr ; i++){

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
// console.log(fibo(8))

const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
const x = num.reduce((acc, curr) => {
    return acc + curr;
})
console.log(x)
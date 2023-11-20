// const coins = [5, 7, 1, 1, 2, 3, 22]

// const x = (arr) => {
//     let changeMin = 1;
//     let sortCoins = arr.sort((a,b) => {return  a - b})
//     for(let i = 0; i <= arr.length; i++){
//         if(changeMin >= sortCoins[i]){
//             changeMin += sortCoins[i]
//         }
//     }
//     return changeMin;
// }

// console.log(x(coins))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const fibo = (nbr) => {


    if(nbr <= 1){
        return nbr;
    }

    return fibo(nbr - 1) + fibo(nbr - 2);
}

console.log(fibo(1))
console.log(fibo(2))
console.log(fibo(3))
console.log(fibo(5))
console.log(fibo(8))
console.log(fibo(13))
console.log(fibo(21))
console.log(fibo(34))
console.log(fibo(10))



// const vote = ['y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n']
// const res = vote.reduce((acc, curr) => {

//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr] = 1
//     }

//     return acc;


// }, {})

// console.log(res)

// 2, 3, 5, 7, 11, 13, 17, 19
const isPrime = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    if(nbr <= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0 ){
        return false;
    }

    let i = 5;
    while(i * i <= nbr){

        if(nbr % i === 0 || nbr % (i + 2) === 0){
            return false;
        }
        i += 6

    }

    return true;


}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(6))
console.log(isPrime(7))
console.log(isPrime(8))
console.log(isPrime(11))
// // 2, 3, 5, 7, 11, 13, 17, 19

// const isPrime = (nbr) => {

//     if(nbr <= 1){
//         return false;
//     }

//     if(nbr <= 3){
//         return true;
//     }

//     if(nbr % 2 === 0 || nbr % 3 === 0){
//         return false;
//     }


//     let i = 5;

//     while(i * i <= nbr){

//         if(nbr % i === 0 || nbr % (i+2) === 0){

//             return false;

//         }
//         i+= 6


//     }

//     return true;


// }

// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(8))
// console.log(isPrime(9))
// console.log(isPrime(10))
// console.log(isPrime(11))
// console.log(isPrime(12))
// console.log(isPrime(13))
// console.log(isPrime(14))
// console.log(isPrime(15))
// console.log(isPrime(16))
// console.log(isPrime(17))
// console.log(isPrime(18))

// const palindrome = (mot) => {

//     let isPalindrome = true

//     for(let i = 0; i<mot.length; i++){

//         if(mot[i] !== mot[mot.length -1 -i]){
//             isPalindrome = false;
//             break;
//         }


//     }

//     if(isPalindrome){
//         console.log('true')
//     }else{
//         console.log('false')
//     }

// }


// console.log(palindrome('kayak'))
// console.log(palindrome('radar'))
// console.log(palindrome('zsedgfzergfezfezf'))



// const vote = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','n','n','n','n','n','n','n','n','n','n', 'y']

// const x = vote.reduce((acc, curr) => {

//     if(acc[curr]){
//         acc[curr]++
//     }else{
//         acc[curr]= 1;
//     }

//     return acc;

// },{})

// console.log(x)

// const isPrime = (nbr) => {

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 0; i< nbr; i++){

//         if(nbr % i ===0){
//             return false;
//         }

//         return true;


//     }

// }

// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))

// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const x = num.reduce((a,b) => {
//     if(a > b){
//         return a
//     }else{
//         return b
//     }
// })

// console.log(x)

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
// sequence = [1, 5, -1, 10]

const validateSubsequence = (arr, seq) => {

    let res = [];

    for(let i = 0; i < arr.length ; i++){
        for(let y= 0; y < seq.length; y++){

            if(arr[i] === seq[y] ){

                res.push(arr[i]);

            }
        }
    }


    console.log(res);
    console.log(seq);

    if(res.toString() === seq.toString()){
        console.log('true')
    }else{
        console.log('false')
    }


}

console.log(validateSubsequence(array, sequence))
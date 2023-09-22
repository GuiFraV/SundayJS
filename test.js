// function Palindrome(mot){

//     let estUnPalindrome = true

//     for(let i = 0; i< mot.length; i++){

//         if(mot[i] !== mot[mot.length -1 -i]){

//             estUnPalindrome = false;


//         }


//     }

//     if(estUnPalindrome){

//         console.log('ceci est un palindrome')


//     }else{



//         console.log("ce n'est pas un palindrome")
//     }



// }

// Palindrome('kayakdsfsdfsdfsd')

// function F(nbr){


//     if(nbr <= 1){
//         return nbr;
//     }

//     let a = 1
//     let b = 1

//     for(let i = 2; i<=nbr; i++){

//         let temp = a + b;
//         a = b;
//         b = temp



//     }

//     return b;


// }


// function F(nbr){

//     if(nbr <= 1 ){
//         return nbr;
//     }

//     return F(nbr - 1) + F(nbr -2);

// }

// console.log(F(9))

// 2, 3, 5, 7, 11, 13, 17, 19

// function Prime(nbr){

//     if(nbr <= 1){
//         return false;
//     }

//     if(nbr >= 3){
//         return true;
//     }

//     if(nbr % 2 === 0 || nbr % 3 === 0){
//         return false;
//     }

//     let i = 5;
//     while(i * i <= nbr){

//         if(nbr % i === 0 || nbr % (i + 2) === 0){
//             return false;
//         }
//         i+=6


//     }

//     return true;


// }



// function P(nbr){

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i <= nbr; i++){


//         if(nbr % i === 0){
//             return false
//         }


//     }

//     return true;


// }


// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
// const x = num.sort((a, b) => {
//     return a - b
// })

// console.log(x)


// function Pal(mot){

//     let estUnpPal = true;


//     for(let i = 0; i< mot.length; i++){

//         if(mot[i] !== mot[mot.length -1 -i]){
//             estUnpPal = false;
//         }

//     }

//     if(estUnpPal){
//         console.log("c'est un palindrome")
//     }



// }


// function Fib(nbr){


//     if(nbr <= 1){
//         return nbr;
//     }

//     return Fib(nbr - 1) + Fib(nbr - 2)


//     // if(nbr <= 1){
//     //     return nbr;
//     // }

//     // let a = 0;
//     // let b = 1;

//     // for(let i = 2; i <= nbr; i++ ){

//     //     let temp = a + b;
//     //     a = b;
//     //     b = temp;


//     // }

//     // return b;



// }

// console.log(Fib(8))

// function isPrime(nbr){

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i < nbr; i++ ){

//         if(nbr % i === 0){
//             return false;
//         }


//     }

//     return true;

// }

// console.log(isPrime(7))

// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
// const x = num.sort((a,b) => {
//     return a - b 
// })

// console.log(x)

// 2, 3, 5, 7, 11, 13, 17, 19
// function Prime(nbr){


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

//         if(nbr % i === 0 || nbr % (i + 2) === 0){
//             return false;
//         }
//         i+= 6


//     }

//     return true;

// }

// console.log(Prime(6))

// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]

// const x = num.reduce((acc, currentValue) => {

//     return acc + currentValue;


// })

// console.log(x)

// function Fibo(nbr){

//      if(nbr <= 1){
//         return nbr;
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 2; i <= nbr; i++ ){

//         let temp = a + b;
//         a = b;
//         b = temp;


//     }

//     return b;

// }

// console.log(Fibo(9))


// const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]

// const x = num.reduce((acc, current) => {
//     return acc + current;
// })

// console.log(x);

// 2, 3, 5, 7, 11, 13, 17, 19

// function isPrime(nbr){

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

//         if(nbr % i === 0 || nbr % (i + 2) === 0){
//             return false;
//         }
//         i += 6

//     }

//     return true;

// }

// console.log(isPrime(6))



// function Fib(nbr){

//     if(nbr <= 1){
//         return nbr;
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 2; i <= nbr; i++ ){

//         let temp = a + b;
//         a = b;
//         b = temp


//     }

//     return b;

// }

// console.log(Fib(10))

// const num = [ 87, 64, 96, 92, 88, 99, 73]

// function max(nbr){

//     // console.log(nbr)

//     return nbr.reduce((a, b) => {
        
//         return (b > a) ? b : a;

//     })

// }

// console.log(max(num))

// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, et 97


// function isP(nbr){

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i< nbr ; i++ ){
//         if(nbr % i === 0){
//             return false;
//         }
//     }


//     return true;

    // if(nbr <= 3){
    //     return true;
    // }

    // if(nbr % 2 === 0 || nbr % 3 === 0){
    //     return false;
    // }

    // let i = 5;
    // while(i * i <= nbr){

    //     if(nbr % i === 0 || nbr % (i+2) === 0){
    //         return false;
    //     }
    //     i += 6

    // }

    // return true;


// }

// console.log(isP(14))
// console.log(isP(15))
// console.log(isP(16))
// console.log(isP(17))


// const vote = ['y','y','n','y','y','n','y','y','n','n','n','n','y']
// const x = vote.reduce((compteur, current) => {

//     if(compteur[current]){

//         compteur[current]++

//     }else{

//         compteur[current] = 1;
//     }

//     return compteur;


// }, {})

// console.log(x);

// function F(nbr){

//     if(nbr <= 1){
//         return nbr;
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 2; i< nbr; i++){

//         let temp = a + b;
//         a = b;
//         b = temp;

//     }

//     return b;


// }

// console.log(F(8))

const num = [ 87, 64, 96, 92, 88, 99, 73]
const x = num.reduce((acc, curr) => {
    
    return (curr > acc ) ? curr : acc;

})

console.log(x)
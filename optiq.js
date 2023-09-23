// // 2, 3, 5, 7, 11, 13, 17, 19
// const isPrime = (nbr) => {

//     if(nbr <= 1){
//         return false;
//     }

//     if (nbr <= 3){
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
//         i += 6;

//     }

//     return true



// }

// console.log(isPrime(5))
// console.log(isPrime(7))
// console.log(isPrime(11))
// console.log(isPrime(4))


// const vote = ['y','y','y','n','y','y','y','n','y','y','y','n','n',,'n','n',,'n','n','n','n']
// const x = vote.reduce((compteur, currentValue) => {

//     if(compteur[currentValue]){
//         compteur[currentValue]++
//     }else{
//         compteur[currentValue] = 1
//     }

//     return compteur
// }, {})

// console.log(x);

// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const r = num.reduce((acc, curr) => {

//     return (curr < acc) ? curr : acc; 

// })

// console.log(r)

// function palindrome(mot){

//     let estUnPalindrome = true;

//     for(let i = 0; i <= mot.length; i++){

//         if(mot[i] !== mot[mot.length -1 - i]){
//             return false;
//             break;
//         }


//     }

//     if(estUnPalindrome){
//         console.log('true')
//     }else{
//         console.log('false')
//     }


// }

// console.log(palindrome('kayakzedfzerfzefzefes'))

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// const fib = (nbr) => {


//     if(nbr <= 1){
//         return nbr;
//     }

//     let a = 0;
//     let b = 1;

//     for(let i = 2; i < nbr; i++){

//         let res = a + b;
//         a = b;
//         b = res;

//     }

//     return b;


// }

// console.log(fib(8))

// 2, 3, 5, 7, 11, 13, 17, 19

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

//         if(nbr % i === 0 || nbr % (i + 7) === 0){
//             return false;
//         }
//         i += 6;

//     }

//     return true;


// }

// console.log(isPrime(5))
// console.log(isPrime(7))
// console.log(isPrime(11))
// console.log(isPrime(4))

const vote = ['y','y','y','n','y','y','y','n','y','y','y','n','n',,'n','n',,'n','n','n','n']
const r = vote.reduce((compteur, valeur) => {

    if(compteur[valeur]){
        compteur[valeur]++
    }else{
        compteur[valeur] = 1
    }

    return compteur;


}, {})

console.log(r);
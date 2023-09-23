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

const num = [ 87, 64, 96, 92, 88, 99, 73]
const r = num.reduce((acc, curr) => {

    return (curr < acc) ? curr : acc; 

})

console.log(r)
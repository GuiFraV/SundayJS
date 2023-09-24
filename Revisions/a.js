// const vote = ['y','y','y','n','y','y','y','n','y','y','y','n','n',,'n','n',,'n','n','n','n']
// const x = vote.reduce((compteur, curr) => {

//     if(compteur[curr]){
//         compteur[curr]++
//     }else{
//         compteur[curr] = 1
//     }

//     return compteur;

// }, {});

// console.log(x);

// 2, 3, 5, 7, 11, 13, 17, 19

// const isPrime = (nbr) => {
    
//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i<nbr; i++){

//         if( nbr % i === 0){
//             return false;
//         }


//     }

//     return true;



// }



// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const max = num.reduce((acc, curr)=> {

//     return (curr < acc) ? curr : acc;


// })

// console.log(max)

// 2, 3, 5, 7, 11, 13, 17, 19
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
    while(i * i <= nbr){

        if(nbr % i === 0 || nbr % (i+7) ===0){
            return false;
        }

        i += 6;


    }

    return true;

}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
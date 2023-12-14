// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const x = num.reduce((acc, curr) => {
//     return (acc > curr) ? acc : curr
// })

// console.log(x)


// const y = (arr) => {

//     let min = 0;

//     for(let i = 0; i< arr.length; i++){

//         if(min < arr[i]){
            
//             min = arr[i]
//         }

//     }

//     return min;

// }

// console.log(y(num))

// 2, 3, 5, 7, 11, 13, 17, 19 

// const isPrime = (nbr)=> {

//     if(nbr <= 1){
//         return false;
//     }

//     for(let i = 2; i< nbr; i++){

//         if(nbr % i === 0){
//             return false;
//         }

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

const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
]

const results = [0,0,1];

function winningCompetition(match, res){

    let obj = {};

    for(let i = 0; i < res.length; i++){

        let homeTeam = match[i][0]
        let awayTeam = match[i][1]

        if(res[i] === 0 ){
            if(obj[awayTeam]){
                obj[awayTeam] += 3
            }else{
                obj[awayTeam] = 3
            }
        }else{
            if(obj[homeTeam]){
                obj[homeTeam] += 3
            }else{
                obj[homeTeam] = 3
            }
        }

    }

    const winningTeam = Object.entries(obj).sort((a,b) => b[1] - a[1])
    return winningTeam[0]

}

console.log(winningCompetition(competitions, results))


const v = ['y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n','y','n','y','n','n','n','n']
const x = (vote) => {

    let obj = {}

    for(let i = 0 ; i < vote.length; i++){

        if(vote[i] === 'y'){

            if(obj[vote[i]]){

                obj[vote[i]]++ 

            }else{

                obj[vote[i]] = 1
            }

        }else if(vote[i] === 'n'){

            if(obj[vote[i]]){

                obj[vote[i]]++ 

            }else{

                obj[vote[i]] = 1
            }
        }
    }

    console.log(obj)
}

console.log(x(v))
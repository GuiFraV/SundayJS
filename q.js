// const array = [5, 1, 22, 25, 6, -1, 8, 10]
// const sequence = [1, 6, -1, 10]

// function validateSubsequence(array, sequence){

//     let arrIdx = 0;
//     let seqIdx = 0;

//     while (arrIdx < array.length && seqIdx < sequence.length){

//         if(array[arrIdx] !== sequence[seqIdx]){

//             arrIdx++

//         }else{

//             seqIdx++
//         }

//     }

//     return seqIdx === sequence.length

// }

// console.log(validateSubsequence(array,sequence))


const competions = [
    ['HTML', 'C#'],
    ['C#', "Python"],
    ["Python", "HTML"]
]
const results = [0, 0 ,1]

function resultsTournament(teams, result){

    let winning = {};

    for(let i = 0; i < teams.length; i++){

        let homeTeam = teams[i][0];
        let awayTeam = teams[i][1];

        if(results[i] === 0){

            if(winning[awayTeam]){
                winning[awayTeam]+=3
            }else{
                winning[awayTeam] = 3
            }

        }else{

            if(winning[homeTeam]){
                winning[homeTeam]+=3
            }else{
                winning[homeTeam] = 3
            }
        }


    }

    const count = Object.entries(winning).sort((a,b) => b[1] - a[1])
    let winningTeam = count[0][0]

    return winningTeam;




}

console.log(resultsTournament(competions, results))
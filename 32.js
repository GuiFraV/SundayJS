// const competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
// ]

// const results = [0, 0 ,1]

// const teamWinnig = (team, res) => {


//     let obj = {};

//     for(let i = 0; i < res.length; i++){

//         let homeTeam = team[i][0]
//         let awayTeam = team[i][1]

//         if(res[i] === 0){

//             if(obj[awayTeam]){
//                 obj[awayTeam] += 3
//             }else{
//                 obj[awayTeam] = 3
//             }

//         }else{

//             if(obj[homeTeam]){
//                 obj[homeTeam] += 3
//             }else{
//                 obj[homeTeam] = 3
//             }

//         }

//     }

//     const sortWinningTeam = Object.entries(obj).sort((a,b) => b[1] - a[1])
//     const finalResult = sortWinningTeam[0][0]
//     return finalResult

// }

// console.log(teamWinnig(competitions, results))


const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        transposed[j] = [];
        for (let i = 0; i < rows; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}

console.log(transposeMatrix(matrix))

const transposed = (arr) => {

    let rows = arr.length;
    let cols = arr[0].length;
    let trans = [];

    for(let j = 0; j < cols; j++){

        trans[j] = [];

        for(let i = 0; i < rows; i++){

            trans[j][i] = arr[i][j]

        }
    }

    return trans;
}

console.log(transposed(matrix))
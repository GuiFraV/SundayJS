const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
]
const result = [0, 0, 1]

// Output
// "Python"
// C# beats HTML, Python Beats C#, and Python Beats HTML
// HTML - 0 points
// C# - 3 points
// Python - 6 points

// function tournamentWinner(competitions, results) {
    
//     let hashMap = {};

//     let homeTeam = competitions.map((team) => {
//         return team[0].split(',')
//     })

//     let awayTeam = competitions.map((team) => {
//         return team[1].split(',')
//     })

//     // console.log({homeTeam});
//     // console.log({awayTeam});

//     for(let i = 0; i < competitions.length; i++){


//         if(results[i] === 0){


//             if(hashMap[awayTeam[i]]){

//                 hashMap[awayTeam[i]] += 3
//             }else{
//                 hashMap[awayTeam[i]] = 3
//             }
            

//         }else{

        

//             if(hashMap[homeTeam[i]]){

//                 hashMap[homeTeam[i]] += 3
//             }else{
//                 hashMap[homeTeam[i]] = 3
//             }


//         }

        

//     }

//     const res = Object.entries(hashMap).sort((a,b) => b[1] - a[1])
//     let winningTeam = res[0][0]

//     return winningTeam;
// }


function tournamentWinner(competitions, results) {
    let hashMap = {};

    for(let i = 0; i < competitions.length; i++){
        let home = competitions[i][0];
        let away = competitions[i][1];

        if(results[i] === 0){
            if(hashMap[away]){
                hashMap[away] += 3;
            }else{
                hashMap[away] = 3;
            }
        }else{
            if(hashMap[home]){
                hashMap[home] += 3;
            }else{
                hashMap[home] = 3;
            }
        }
    }

    return hashMap;
}

console.log(tournamentWinner(competitions, result))

// var theArray = [["Split","each"],["string", "in"],["this","array"]];

// var newArray = theArray.map(function(v){
//     return v[1].split(",");
//  });
// console.log(newArray)


/*
DEBUT

POUR i allant de 0 à Longueur de Compétition par pas de 1 FAIRE

    POUR y allant de 0 à Longueur de result par pas de 1 FAIRE 

        Si result[y] est égale à 0 ALORS
            HomeTeam Win
        Sinon
            AwayTeam Win


FIN


*/

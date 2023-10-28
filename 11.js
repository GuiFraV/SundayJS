const competitions = [
    ['HTML', 'C#'],
    ['C#', "Python"],
    ['Python', 'HTML']
];

const results = [0,0,1];

function winningTeam(teams, res){

    let obj = {}

    for(let i = 0; i< res.length; i++){

        let homeTeam = teams[i][0]
        let awayTeam = teams[i][1]

        if(res[i] === 0){
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

    const winnerSort = Object.entries(obj).sort((a,b) => b[1] - a[1])
    const winner = winnerSort[0][0]
    return winner;



}

console.log(winningTeam(competitions, results))
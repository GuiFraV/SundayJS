const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0 ,1]

const winningTeam = (comp, res) => {

    let obj = {};

    for( let i = 0 ; i < res.length; i++){

        let homeTeam = comp[i][0];
        let awayTeam = comp[i][1];


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

    const teamsSplit = Object.entries(obj).sort((a,b) => b[1] - a[1]);
    const teamWinning = teamsSplit[0][0]
    return teamWinning;

}

console.log(winningTeam(competitions, results))
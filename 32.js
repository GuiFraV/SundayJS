const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0 ,1]

const teamWinnig = (team, res) => {


    let obj = {};

    for(let i = 0; i < res.length; i++){

        let homeTeam = team[i][0]
        let awayTeam = team[i][1]

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

    const sortWinningTeam = Object.entries(obj).sort((a,b) => b[1] - a[1])
    const finalResult = sortWinningTeam[0][0]
    return finalResult

}

console.log(teamWinnig(competitions, results))
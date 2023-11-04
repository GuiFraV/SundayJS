const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0,0,1]

const runningTournament = (comp, res) => {

    let obj = {}

    for(let i = 0; i < res.length; i++){

        let homeTeam = comp[i][0]
        let awayTeam = comp[i][1]

        console.log({homeTeam})
        console.log({awayTeam})

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
    const finalResult = winningTeam[0][0]
    console.log(finalResult)
    return obj;

}


console.log(runningTournament(competitions, results))
const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];

const results = [0, 0, 1];

const comp = (team, res) => {

    let obj = {};

    for(let i = 0 ; i < res.length ; i++){

        let homeTeam = team[i][0];
        let awayTeam = team[i][1];


        if(res[i] !== 0){

            if(obj[homeTeam]){
                obj[homeTeam] += 3;
            }else{
                obj[homeTeam] = 3;
            }
        }else{
            if(obj[awayTeam]){
                obj[awayTeam] += 3;
            }else{
                obj[awayTeam] = 3;
            }

        }
    }

    const resulTeam = Object.entries(obj).sort((a,b) => {return b[0] - a[0] });

    const winner = resulTeam[1][0] 

    return winner;
}

console.log(comp(competitions, results));
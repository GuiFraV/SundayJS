const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
]
const results = [0, 0, 1]

function tournamentWinner(comp, res){

    let hashMap = {};

    for(let i = 0; i<comp.length; i++){

        let homeTeam = comp[i][0];
        let awayTeam = comp[i][1]; 

        if(res[i] === 0){

            if(hashMap[awayTeam]){
                hashMap[awayTeam] +=3
            }else{
                hashMap[awayTeam] = 3
            }

        }else{

            if(hashMap[homeTeam]){
                hashMap[homeTeam] +=3
            }else{
                hashMap[homeTeam] = 3
            }

        }


    }

    console.log(hashMap);


}

console.log(tournamentWinner(competitions, results))
const competitions = [
    ["HTML", 'C#'],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0, 1]

// [homeTeam, awayTeam] 
// 0 => awayTeam
// 1 => homeTeam

function winningTournoi(arr, result){

    let obj = {};

    for(let i = 0; i< arr.length; i++){

        let homeTeam = arr[i][1]
        let awayTeam = arr[i][0]

        if(result[i] === 0){

            if(obj[homeTeam]){
                obj[homeTeam] += 3
            }else{
                obj[homeTeam] = 3
            }

        }else {

            if(obj[awayTeam]){
                obj[awayTeam] += 3
            }else{
                obj[awayTeam] = 3
            }
        }

    }

    // for (const [key, value] of Object.entries(obj)) {
    //     console.log(`${key}: ${value}`);
    // }

    
    const objValues = Object.values(obj)


    // console.log(objValues[0])
    console.log(Object.keys(objValues))
}

console.log(winningTournoi(competitions, results))
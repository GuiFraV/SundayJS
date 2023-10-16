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
    const res = [];

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

    
    
    const objValues = Object.values(obj)
    const maxObjValue = objValues.reduce((acc, curr) => {
        return acc > curr ? acc : curr
    })
    
    for (const [key, value] of Object.entries(obj)) {
        if(maxObjValue === value){
            res.push(key)
        }
    }

    console.log(res.toString())

}

console.log(winningTournoi(competitions, results))
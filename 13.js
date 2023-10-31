// function isPalindrome(str){

//     let isPal = true;


//     for(let i = 0; i< str.length; i++){

//         if(str[i] !== str[str.length -1 -i]){
//             isPal = false;
//         }

//     }

//     return isPal 

// }

// console.log(isPalindrome('kayasdfsdfsdfsdfsdfk'))

const competitions = [
    ['HTML', 'C#'],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0, 1]

function winningTeam(team, results){

    let obj = {}

    for(let i = 0 ; i < team.length; i++){

        let homeTeam = team[i][0]
        let awayTeam = team[i][1]

        if(results[i] === 0){

            if(obj[awayTeam]){

                obj[awayTeam] +=3
            }else{

                obj[awayTeam] =3
            }

        }else{


            
            if(obj[homeTeam]){

                obj[homeTeam] +=3
            }else{

                obj[homeTeam] =3
            }
        }



    }

    const winningTeam = Object.entries(obj).sort((a,b) => b[1] - a[1])
    const winner = winningTeam[0][0]

    return winner


}

console.log(winningTeam(competitions, results))
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


const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10, 25]


function validateSubsequence(arr, seq){

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){

        if(arr[arrIdx] !== seq[seqIdx]){

            arrIdx++
        }else{

            seqIdx++
        }

    }

    return seqIdx === seq.length

}

console.log(validateSubsequence(array, sequence))

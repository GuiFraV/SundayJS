const coins = [5, 7, 1, 1, 2, 3, 22]

const coinsSort = coins.sort((a, b) => a-b)

let changeMin = 1;

console.log(coinsSort)

for(let i = 0; i < coins.length; i++){

    if(coinsSort[i] <= changeMin){

        changeMin += coinsSort[i]

    }

    // console.log(changeMin)

    
}

// return changeMin

console.log(changeMin);
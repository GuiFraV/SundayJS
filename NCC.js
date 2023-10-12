const coins = [5, 7, 1, 1, 2, 3, 22];

const echangeMin = (coins) => {

    const coinsSort = coins.sort((a,b) => a - b);
    let changeMin = 1;

    for(let i = 0; i< coins.length; i++){
        if(coinsSort[i] <= changeMin){
            changeMin += coinsSort[i]
        }
    }
    console.log(changeMin)
}

console.log(echangeMin(coins))
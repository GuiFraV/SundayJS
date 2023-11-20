const coins = [5, 7, 1, 1, 2, 3, 22]

const x = (arr) => {
    let changeMin = 1;
    let sortCoins = arr.sort((a,b) => {return  a - b})
    for(let i = 0; i <= arr.length; i++){
        if(changeMin >= sortCoins[i]){
            changeMin += sortCoins[i]
        }
    }
    return changeMin;
}

console.log(x(coins))
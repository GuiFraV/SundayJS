const coins = [1, 2, 5]

function minumumChange(arr){

    let changeMin = 1;
    let sortCoins = arr.sort((a,b) => { return a-b})

    console.log(sortCoins)

    for(let i = 0; i < sortCoins.length; i++){

        if(changeMin >= sortCoins[i]){
            changeMin += sortCoins[i]
        }

    }

   return changeMin;


}

console.log(minumumChange(coins))
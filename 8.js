const coins = [5, 7, 1, 1, 2, 3, 22]

const x = (arr) => {


    let changeMin = 1;
    let coinsSort = arr.sort((a,b) => { return a - b})

    console.log(coinsSort)

    for(let i = 0 ; i < coinsSort.length; i++){


        if(changeMin >= coinsSort[i]){

            changeMin += coinsSort[i]

        }


    }

    console.log(changeMin)

}

console.log(x(coins))
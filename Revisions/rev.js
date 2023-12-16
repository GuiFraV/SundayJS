const coins = [5, 7, 1, 1, 2, 3, 22];

const convert = (arr) => {

    let c = 1 ;
    let sortedCoin = arr.sort((a, b) => a - b)

    for(let i = 0; i < arr.length; i++){

        if(c >= sortedCoin[i]){
            c += sortedCoin[i]
        }


    }

    return c;


}

console.log(convert(coins))
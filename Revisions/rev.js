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

const palindrome = (str) => {

    let isPalin = true;

    for(let i= 0 ; i < str.length ; i++){


        if(str[i] !== str[str.length -1 - i]){


            isPalin = false;

        }


    }

    return isPalin;


}

console.log(palindrome('kayak'))
const coins = [5, 7, 1, 1, 2, 3, 22];
const x = coins.reduce((acc, curr) => {
    return acc + curr
})

console.log(x)

function sommeArray(arr){

    let res = 0;

    for(let i = 0; i<arr.length; i++){

        res += arr[i];


    }

    return res;


}

console.log(sommeArray(coins))
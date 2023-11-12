// const a = [7,10,23,5,8,9,56,82,66,77,87]
// const x = a.reduce((acc, curr) => {
//     return acc+curr;
// })

// console.log(x);

const coins = [5, 7, 1, 1, 2, 3, 22];
const minChange = (arr) => {
    let changeMin = 1;
    let coinsSort = arr.sort((a,b) => a - b)
    for(let i = 0 ; i<=coinsSort.length; i++){
        if(changeMin >= coinsSort[i]){
            changeMin += coinsSort[i]
        }
    }
    return changeMin;
}

console.log(minChange(coins))
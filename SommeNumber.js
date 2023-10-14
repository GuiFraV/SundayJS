const coins = [5, 7, 1, 1, 2, 3, 22];
const x = coins.reduce((acc, curr) => {
    return acc + curr
})

console.log(x)
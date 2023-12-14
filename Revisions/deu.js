const a = [1, 90, 10, 20, 56, 18, 20, 98, 2, ,8 ,99, 500]
const x = a.reduce((acc, curr) => {
    return acc + curr;
})

console.log(x);
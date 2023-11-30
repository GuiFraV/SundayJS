const num = [ 87, 64, 96, 92, 88, 99, 73]
const x = num.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
})

console.log(x)
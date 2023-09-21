const x = [3, 5, 7, 9, 11].reduce((accumulateur, currentValue) => {
    return accumulateur + currentValue;
})

// CallBack   Accumulateur   currentValue   return
// 1st Call:        3              5           8
// 2nd Call:        8              7           15
// 3rd Call:        15             9           24
// 4th Call:        24             11          35


const num = [ 87, 64, 96, 92, 88, 99, 73]

const max = num.reduce((max, currentValue) => {
    return (currentValue > max) ? currentValue : max
})

console.log(max)
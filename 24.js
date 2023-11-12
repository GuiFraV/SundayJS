const a = [7,10,23,5,8,9,56,82,66,77,87]
const x = a.reduce((acc, curr) => {
    return acc+curr;
})

console.log(x);
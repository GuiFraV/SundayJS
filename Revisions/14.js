const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
const x = num.sort((a,b) => {return a - b})

// console.log(x);

const v = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','y','y']
const s = v.reduce((acc, curr) => {

    if(acc[curr]){

        acc[curr]++

    }else{

        acc[curr] = 1
    }

    return acc;

}, {})

console.log(s)
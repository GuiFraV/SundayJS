const v = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','y','y']

const x = v.reduce((acc, curr) => {

    if(acc[curr]){
        acc[curr] += 1
    }else{
        acc[curr] = 1
    }

    return acc;

},{})

console.log(x)
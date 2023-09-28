const vote = ['y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n', 'y','y','n','y','n','n']
const res = vote.reduce((acc, curr) => {

    if(acc[curr]){
        acc[curr]++
    }else{
        acc[curr] = 1
    }

    return acc;


}, {})

console.log(res)
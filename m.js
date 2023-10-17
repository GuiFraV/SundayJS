const v = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','y','y']

// With reduce method
// const x = v.reduce((acc, curr) => {

//     if(acc[curr]){
//         acc[curr] += 1
//     }else{
//         acc[curr] = 1
//     }

//     return acc;

// },{})

// With ForEach Method
function countOccurence(arr){

    let obj = {};

    v.forEach((a) => {    
    
        if(obj[a]){
            obj[a] += 1;
        }else{
            obj[a] = 1
        }
    
        // console.log(obj)
        
    })
    return obj;
}


console.log(countOccurence(v))
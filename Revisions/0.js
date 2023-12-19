// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 6, -1, 10];

// const validate = (arr, sub) => {

//     let arrIdx = 0;
//     let subIdx = 0;

//     while(arrIdx < arr.length && subIdx < sub.length){

//         if(arr[arrIdx] !== sub[subIdx]){
//             arrIdx++;
//         }else{
//             subIdx++;
//         }
//     }
//     return subIdx === sub.length;

// }


// console.log(validate(array, sequence));


const v = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','y','y']

const x = v.reduce((acc, cur) =>{

    if(acc[cur]){
        acc[cur]++
    }else{
        acc[cur] = 1;
    }

    return acc;

}, {});

console.log(x)
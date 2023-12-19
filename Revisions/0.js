const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const validate = (arr, sub) => {

    let arrIdx = 0;
    let subIdx = 0;

    while(arrIdx < arr.length && subIdx < sub.length){

        if(arr[arrIdx] !== sub[subIdx]){
            arrIdx++;
        }else{
            subIdx++;
        }
    }
    return subIdx === sub.length;

}


console.log(validate(array, sequence));
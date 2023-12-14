const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10, 11, 12]

function validateSubsequence(arr, seq){

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){

        if(arr[arrIdx] !== seq[seqIdx]){
            arrIdx++
        }else{
            seqIdx++
        }

    }

    return seqIdx == seq.length


}

console.log(validateSubsequence(array, sequence))
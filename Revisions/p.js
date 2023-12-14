const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]


function validateSubsequence(arr, sequence){

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < sequence.length){

        if(arr[arrIdx] === sequence[seqIdx]){
            seqIdx++
        }else{
            arrIdx++
        }


    }

    console.log(seqIdx)

    return seqIdx == sequence.length

}

console.log(validateSubsequence(array, sequence))

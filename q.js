const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

function validateSubsequence(array, sequence){

    let arrIdx = 0;
    let seqIdx = 0;

    while (arrIdx < array.length && seqIdx < sequence.length){

        if(array[arrIdx] !== sequence[seqIdx]){

            arrIdx++

        }else{

            seqIdx++
        }

    }

    return seqIdx === sequence.length

}

console.log(validateSubsequence(array,sequence))
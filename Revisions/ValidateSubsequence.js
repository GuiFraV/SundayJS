array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10, 50, 25]

function validateSubsequence(arr, seq){

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx <= arr.length && seqIdx < seq.length ){

        if(arr[arrIdx] === seq[seqIdx]){
            seqIdx++;
        }else{
            arrIdx++;
        }

    }

    if(seqIdx === seq.length){
        console.log('true')
    }else{
        console.log('false')
    }

}

console.log(validateSubsequence(array, sequence))
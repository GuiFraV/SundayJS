array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

const isValidateSubsequence = (arr, seq) => {

    let aIdx = 0;
    let bIdx = 0;

    while(aIdx < arr.length && bIdx < seq.length){

        if(arr[aIdx] === seq[bIdx]){

            bIdx++
            


        }else{

            aIdx++
        }

    }

    if(bIdx === seq.length){
        console.log('true')
    }else{
        console.log('false')
    }


}

console.log(isValidateSubsequence(array, sequence))
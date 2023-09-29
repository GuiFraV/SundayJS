array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function validateSubsequence(arr, seq){

    let arr_idx = 0;
    let seq_idx = 0;

    while(arr_idx < arr.length && seq_idx < seq.length){

        if(arr[arr_idx] === seq[seq_idx]){
            seq_idx++
        }else{
            arr_idx++
        }
    }

   return seq_idx === seq.length;

}

console.log(validateSubsequence(array, sequence))
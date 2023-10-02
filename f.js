array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]

function validateSubsequence(arr, sequence){

    let a = 0;
    let b = 0;

    while(a < arr.length && b < sequence.length){

        if(arr[a] === sequence[b]){
            b++
        }else{
            a++
        }

        
        
    }
    
    return b === sequence.length;

}

console.log(validateSubsequence(array, sequence))
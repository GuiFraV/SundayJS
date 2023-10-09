array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10, 11]

const isSub = (arr, seq) => {

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){

        if(arr[arrIdx] === seq[seqIdx]){
            seqIdx++
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
console.log('hello')
console.log(isSub(array, sequence))
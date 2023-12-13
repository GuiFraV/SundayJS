const fib = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }

    return fib(nbr - 1) + fib(nbr - 2);

}

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

const valide = (arr, seq) => {

    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){

        if(arr[arrIdx] !== seq[seqIdx]){
            arrIdx++;
        }else{
            seqIdx++;
        }
    }

    return seqIdx === seq.length;
}

console.log(valide(array, sequence))

const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

const transposed = (arr) => {

    let rows = arr.length;
    let cols = arr[0].length;
    let t = [];

    for(let j = 0 ; j < cols; j++){

        t[j] = [];

        for(let i = 0 ; i < rows; i++){

            t[j][i] = arr[i][j]


        }

    }

    return t;


}

console.log(transposed(matrix))
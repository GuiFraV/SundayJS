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
            t[j][i] = arr[i][j];
        }
    }

    return t;
}

console.log(transposed(matrix));
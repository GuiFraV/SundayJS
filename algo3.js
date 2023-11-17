const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

const transposed = (m) => {
    let rows = m.length;
    let cols = m[0].length;
    let transpo = [];

    for(let j = 0 ; j < cols ; j++){
        transpo[j] = [];
        for(let i = 0 ; i < rows; i++){
            transpo[j][i] = m[i][j]
        }
    }

    return transpo;
}

console.log(transposed(matrix));
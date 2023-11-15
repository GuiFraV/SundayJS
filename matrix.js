const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// const matrix = [
//     [1],
// ]

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        transposed[j] = [];
        for (let i = 0; i < rows; i++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    return transposed;
}


console.log(transposeMatrix(matrix))

// Outputs : 
// [
//     [1, 3, 5],
//     [2, 4, 6]
// ]

// Je sépare le tab matrix[0] en deux tab distinct : [1, 2] => tab1[1] tab2[2]
// Je sépare le tab matrix[1] en deux tab distinct : [3, 4] => tab1[3] tab2[4]
// Je sépare le tab matrix[2] en deux tab distinct : [5, 6] => tab1[5] tab2[6]
// Ensuite concaténer  tab1 avec tab2


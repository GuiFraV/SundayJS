// const competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
// ]

// const results = [0, 0 ,1]

// const teamWinnig = (team, res) => {


//     let obj = {};

//     for(let i = 0; i < res.length; i++){

//         let homeTeam = team[i][0]
//         let awayTeam = team[i][1]

//         if(res[i] === 0){

//             if(obj[awayTeam]){
//                 obj[awayTeam] += 3
//             }else{
//                 obj[awayTeam] = 3
//             }

//         }else{

//             if(obj[homeTeam]){
//                 obj[homeTeam] += 3
//             }else{
//                 obj[homeTeam] = 3
//             }

//         }

//     }

//     const sortWinningTeam = Object.entries(obj).sort((a,b) => b[1] - a[1])
//     const finalResult = sortWinningTeam[0][0]
//     return finalResult

// }

// console.log(teamWinnig(competitions, results))


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// function transposeMatrix(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;
//     let transposed = [];

//     for (let j = 0; j < cols; j++) {
//         transposed[j] = [];
//         for (let i = 0; i < rows; i++) {
//             transposed[j][i] = matrix[i][j];
//         }
//     }

//     return transposed;
// }

// console.log(transposeMatrix(matrix))

// const transposed = (arr) => {

//     let rows = arr.length;
//     let cols = arr[0].length;
//     let trans = [];

//     for(let j = 0; j < cols; j++){

//         trans[j] = [];

//         for(let i = 0; i < rows; i++){

//             trans[j][i] = arr[i][j]

//         }
//     }

//     return trans;
// }

// console.log(transposed(matrix))


// const fibo = (nbr) => {

//     if(nbr <= 1){
//         return nbr;
//     }

//     return fibo(nbr - 1) + fibo(nbr - 2)

// }

// console.log(fibo(1))
// console.log(fibo(2))
// console.log(fibo(3))
// console.log(fibo(4))
// console.log(fibo(5))
// console.log(fibo(6))
// console.log(fibo(7))

// const tree = {
// "nodes": [
//     {"id": "10", "left": "5", "right": "15", "value": 10},
//     {"id": "15", "left": "13", "right": "22", "value": 15},
//     {"id": "22", "left": null, "right": null, "value": 22},
//     {"id": "13", "left": null, "right": "14", "value": 13},
//     {"id": "14", "left": null, "right": null, "value": 14},
//     {"id": "5", "left": "2", "right": "5-2", "value": 5},
//     {"id": "5-2", "left": null, "right": null, "value": 5},
//     {"id": "2", "left": "1", "right": null, "value": 2},
//     {"id": "1", "left": null, "right": null, "value": 1}
// ],
//     "root": "10"
// }

// class BST {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// const target = 12

// function buildTree(jsonTree) {
//     const nodes = {};  
//     jsonTree.nodes.forEach(nodeData => {
//         nodes[nodeData.id] = new BST(nodeData.value);
//     });
//     jsonTree.nodes.forEach(nodeData => {
//         if (nodeData.left) nodes[nodeData.id].left = nodes[nodeData.left];
//         if (nodeData.right) nodes[nodeData.id].right = nodes[nodeData.right];
//     });
//     return nodes[jsonTree.root];
// }

// const bstRoot = buildTree(tree);


// const findClosestValue = (tree, target) => {

//     let closest = Infinity;
//     let currentNode = tree;

//     while(currentNode !== null){

//         if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
//             closest = currentNode.value
//         }

//         if(target < currentNode.value){
//             currentNode = currentNode.left
//         }else if(target > currentNode.value){
//             currentNode = currentNode.right
//         }else{
//             break;
//         }

//     }
//     return closest;
// }

// console.log(findClosestValue(bstRoot, 12))


const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]
const s = num.sort((a,b) => a - b)
console.log(s)
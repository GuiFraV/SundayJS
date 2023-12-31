// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6]
// ]

// const transposed = (m) => {

//     let rows = m.length;
//     let cols = m[0].length;
//     let tr = [];

//     for (let j = 0 ; j < cols; j++){

//         tr[j] = [];

//         for(let i = 0; i < rows; i++){


//             tr[j][i] = m[i][j]


//         }

//     }
//     return tr;
// }

// console.log(transposed(matrix))

const tree = {
"nodes": [
    {"id": "10", "left": "5", "right": "15", "value": 10},
    {"id": "15", "left": "13", "right": "22", "value": 15},
    {"id": "22", "left": null, "right": null, "value": 22},
    {"id": "13", "left": null, "right": "14", "value": 13},
    {"id": "14", "left": null, "right": null, "value": 14},
    {"id": "5", "left": "2", "right": "5-2", "value": 5},
    {"id": "5-2", "left": null, "right": null, "value": 5},
    {"id": "2", "left": "1", "right": null, "value": 2},
    {"id": "1", "left": null, "right": null, "value": 1}
],
    "root": "10"
}

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const target = 12

function buildTree(jsonTree) {
    const nodes = {};  
    jsonTree.nodes.forEach(nodeData => {
        nodes[nodeData.id] = new BST(nodeData.value);
    });
    jsonTree.nodes.forEach(nodeData => {
        if (nodeData.left) nodes[nodeData.id].left = nodes[nodeData.left];
        if (nodeData.right) nodes[nodeData.id].right = nodes[nodeData.right];
    });
    return nodes[jsonTree.root];
}

const bstRoot = buildTree(tree);

const findClosestValue = (tree, target) => {

    let closest = Infinity;
    let currentNode = tree

    while(currentNode !== null){

        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value
        }
        if(target < currentNode.value){
            currentNode = currentNode.left
        }else if ( target > currentNode.value){
            currentNode = currentNode.right
        }
    }

    return closest
}

console.log(findClosestValue(bstRoot, target))

// 2, 3, 5, 7, 11, 13, 17, 19

const primeNumber = (nbr) => {

    if(nbr <= 1 ){
        return false;
    }

    for(let i = 2 ; i < nbr; i++){

        if(nbr % i === 0){
            return false;
        }


    }

    return true;


}

console.log(primeNumber(1))
console.log(primeNumber(2))
console.log(primeNumber(3))
console.log(primeNumber(5))
console.log(primeNumber(7))
console.log(primeNumber(11))
console.log(primeNumber(13))
console.log(primeNumber(17))
console.log(primeNumber(19))
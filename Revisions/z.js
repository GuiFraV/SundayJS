const primeNumber = (nbr) => {

    if(nbr <= 1){
        return false;
    }

    for(let i = 2 ; i < nbr; i++){

        if(nbr % i === 0){
            return false;
        }

    }

    return true;
}

console.log(primeNumber(2))
console.log(primeNumber(3))
console.log(primeNumber(4))
console.log(primeNumber(5))
console.log(primeNumber(6))
console.log(primeNumber(7))

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
    let currentNode = tree;

    while(currentNode !== null){
        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value;
        }

        if(target < currentNode.value){
            currentNode = currentNode.left;
        }else if(target > currentNode.value){
            currentNode = currentNode.right;
        }else{
            break;
        }
    }

    return closest;
}

console.log(findClosestValue(bstRoot, 12));

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

const validateSubSequence = (arr, seq) => {
    let arrIdx = 0;
    let seqIdx = 0;

    while(arrIdx < arr.length && seqIdx < seq.length){

        if(arr[arrIdx] !== seq[seqIdx]){

            arrIdx++

        }else{
            seqIdx++
        }


    }

    return seqIdx === seq.length;

}

console.log(validateSubSequence(array,sequence))

const fib = (nbr) => {

    if(nbr <= 1){
        return nbr;
    }
    let a = 0;
    let b = 1;
    for(let i = 0 ; i < nbr; i++){
        let res = a + b;
        a = b;
        b = res;
    }
    return b;
}

console.log(fib(1))
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
console.log(fib(8))
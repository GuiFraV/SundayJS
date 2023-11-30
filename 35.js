// const num = [ 87, 64, 96, 92, 88, 99, 73]
// const x = num.reduce((acc, curr) => {
//     return acc > curr ? acc : curr;
// })

// console.log(x)


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
//             closest = currentNode.value;
//         }

//         if(target < currentNode.value){
//             currentNode = currentNode.left;
//         }else if(target > currentNode.value){
//             currentNode = currentNode.right;
//         }else{
//             break;
//         }
//     }

//     return closest;
// }

// console.log(findClosestValue(bstRoot, 12))


const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

function subSequence(arr, seq){

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

console.log(subSequence(array, sequence));
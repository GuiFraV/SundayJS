// const array = [5, 1, 22, 25, 6, -1, 8, 10];
// const sequence = [1, 6, -1, 10];

// const validate = (arr, sub) => {

//     let arrIdx = 0;
//     let subIdx = 0;

//     while(arrIdx < arr.length && subIdx < sub.length){

//         if(arr[arrIdx] !== sub[subIdx]){
//             arrIdx++;
//         }else{
//             subIdx++;
//         }
//     }
//     return subIdx === sub.length;

// }


// console.log(validate(array, sequence));


// const v = ['y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','n','n','y','y','y']

// const x = v.reduce((acc, cur) =>{

//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur] = 1;
//     }

//     return acc;

// }, {});

// console.log(x)

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



const findClosest = (tree, target) => {

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

console.log(findClosest(bstRoot, 12))



const my_list = [1, 3, 5, 7, 9]

const simpleBinary = (arr, target) => {

    let low = 0;
    let high = arr.length -1;

    while(low <= high){

        let mid = Math.floor((low + high) / 2);

        if(target === arr[mid]){
            return mid;
        }

        if(target < arr[mid]){
            high = mid -1;
        }else{
            low = mid + 1;
        }
    }
}

console.log(simpleBinary(my_list, 9))
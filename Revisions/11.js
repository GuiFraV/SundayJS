// const competitions = [
//     ['HTML', 'C#'],
//     ['C#', "Python"],
//     ['Python', 'HTML']
// ];

// const results = [0,0,1];

// function winningTeam(teams, res){

//     let obj = {}

//     for(let i = 0; i< res.length; i++){

//         let homeTeam = teams[i][0]
//         let awayTeam = teams[i][1]

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

//     const winnerSort = Object.entries(obj).sort((a,b) => b[1] - a[1])
//     const winner = winnerSort[0][0]
//     return winner;



// }

// console.log(winningTeam(competitions, results))

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

function closestValue(tree, target){

    let closest = Infinity;
    let currentNode = tree;

    while(currentNode !== null){


        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value
        }

        if(target < currentNode.value){
            currentNode = currentNode.left
        }else if (target > currentNode.value){
            currentNode = currentNode.right
        }
    }

    return closest


}

console.log(closestValue(bstRoot, 12))
// const array = [5, 1, 22, 25, 6, -1, 8, 10]
// const sequence = [1, 6, -1, 10]

// function validateSubsequence(array, sequence){

//     let arrIdx = 0;
//     let seqIdx = 0;

//     while (arrIdx < array.length && seqIdx < sequence.length){

//         if(array[arrIdx] !== sequence[seqIdx]){

//             arrIdx++

//         }else{

//             seqIdx++
//         }

//     }

//     return seqIdx === sequence.length

// }

// console.log(validateSubsequence(array,sequence))


// const competions = [
//     ['HTML', 'C#'],
//     ['C#', "Python"],
//     ["Python", "HTML"]
// ]
// const results = [0, 0 ,1]

// function resultsTournament(teams, result){

//     let winning = {};

//     for(let i = 0; i < teams.length; i++){

//         let homeTeam = teams[i][0];
//         let awayTeam = teams[i][1];

//         if(results[i] === 0){

//             if(winning[awayTeam]){
//                 winning[awayTeam]+=3
//             }else{
//                 winning[awayTeam] = 3
//             }

//         }else{

//             if(winning[homeTeam]){
//                 winning[homeTeam]+=3
//             }else{
//                 winning[homeTeam] = 3
//             }
//         }


//     }

//     const count = Object.entries(winning).sort((a,b) => b[1] - a[1])
//     let winningTeam = count[0][0]

//     return winningTeam;




// }

// console.log(resultsTournament(competions, results))

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

    function findClosestValue(bst, target){

        
        let closest = Infinity;
        let currentNode = tree;
    
        while(currentNode !== null){
    
            if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
                closest = currentNode.value
            }
    
            if(target > currentNode.value){
                currentNode = currentNode.right
            }
    
            if(target < currentNode.value){
                currentNode = currentNode.left
            }
        }
    
        return closest
    


    }
// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
    const stack = [{ node: root, runningSum: 0 }];
    let res = [];
  
    while(stack.length > 0){
        const { node, runningSum } = stack.pop();
        let newRunningSum = runningSum + node.value;

        if(node.right === null && node.left === null){
            res.push(newRunningSum);
        }

        if(node.right) {
            stack.push({ node: node.right, runningSum: newRunningSum });
        }
        if(node.left) {
            stack.push({ node: node.left, runningSum: newRunningSum });
        }
    }

    return res;
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;

// Check for Balanced Binary Tree
// Problem: Determine if a binary tree is height-balanced.
// Required Time Complexity: O(n).
class Tree {
  value: number;
  rightChild: Tree | null;
  leftChild: Tree | null;
  constructor(val: number) {
    this.value = val;
  }
}

function CheckBTHigh(root: Tree): boolean {
  function heigh(node: Tree | null): number {
    if (!node) return 0;

    const left = heigh(node.leftChild);
    if (left === -1) return -1;
    const right = heigh(node.rightChild);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) return -1;
    return Math.max(left, right) + 1;
  }
  return heigh(root) !== -1;
}

const tree = new Tree(10);
tree.leftChild = new Tree(5);
tree.rightChild = new Tree(15);
console.log("tree 1", tree);
console.log(CheckBTHigh(tree));
tree.leftChild.leftChild = new Tree(8);
console.log("tree 2", tree);
console.log(CheckBTHigh(tree));
tree.leftChild.leftChild.rightChild = new Tree(11);
console.log("tree 2", tree);
console.log(CheckBTHigh(tree));
// tree.leftChild.leftChild = new Tree(3);
// console.log("tree 3", tree);
// console.log(CheckBTHigh(tree));
// tree.rightChild.leftChild = new Tree(16);
// console.log("tree 4", tree);
// console.log(CheckBTHigh(tree));

//Validate if a binary search tree is valid
namespace BTS {
  class BSTree {
    value: number;
    left: BSTree | null;
    right: BSTree | null;
    constructor(
      value: number,
      left: BSTree | null = null,
      right: BSTree | null = null
    ) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  const tree = new BSTree(5);
  tree.left = new BSTree(8);
  tree.right = new BSTree(3);
  tree.left.left = new BSTree(2);
  tree.left.right = new BSTree(9);

  const tree2 = new BSTree(10);
  tree2.left = new BSTree(5);
  tree2.right = new BSTree(15);
  tree2.left.left = new BSTree(2);
  tree2.left.right = new BSTree(7);
  tree2.right.left = new BSTree(12);
  tree2.right.right = new BSTree(20);
  tree2.left.left.left = new BSTree(1);
  tree2.left.left.right = new BSTree(3);
  tree2.left.right.left = new BSTree(6);
  tree2.left.right.right = new BSTree(8);
  tree2.right.left.left = new BSTree(11);
  tree2.right.left.right = new BSTree(14);
  tree2.right.right.left = new BSTree(18);
  tree2.right.right.right = new BSTree(22);

  function validateTree(root: BSTree | null): boolean {
    if (!root) {
      return true;
    }
    if (root.left) {
      if (root.value < root.left.value) {
        return false;
      }
    }
    if (root.right) {
      if (root.value > root.right.value) {
        return false;
      }
    }
    return validateTree(root.left) && validateTree(root.right);
  }

  console.log(validateTree(tree));
  console.log(validateTree(tree2));
  tree2.right.right.right.right = new BSTree(4);
  console.log(validateTree(tree2));
}

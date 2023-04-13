const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
  /*constructor() {
    this.data = data;
    this.left = null;
    this.right = null;
  } node creates by this methood (../extensions/list-tree.js)
  */


class BinarySearchTree {
  constructor() {
    //create radix for our tree
    //change name root because according to task we have methood with the same name
    this.radix = null;
  }

  root() {
    return this.radix;
  }

  add(data) {
    let newNode = new Node(data);
    this.radix = addNode(this.radix, data)
    function addNode(node, data) {
      if (!node) {
        return newNode;
      }
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        node.left = addNode(node.left, data)
      } else  if (data > node.data){
        node.right = addNode(node.right, data)
      }
      return node;
    }
  };

  has(data) {
    let result = findDig(this.radix, data);
    return result;
    function findDig(node, data) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      } else if (data < node.data) {
        return findDig(node.left, data)
      } else if (data > node.data) {
        return findDig(node.right, data)
      }
    }
  };

  find(data) {
    let result = findNode(this.radix, data);
    return result;

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data)
      } else if (data > node.data){
        return findNode(node.right, data)
      }
    }
  };

  remove(data) {
    this.radix = removeNode(this.radix, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
          node.right = removeNode(node.right, data);
          return node;
      } else { //third option node with two children
        if (!node.right && !node.left) {
          node = null;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        let minNode = node.right;
        if (Boolean(minNode.left)) {
          minNode = minNode.left;
        }
        node.data = minNode.data;
        node.right = removeNode(node.right, minNode.data)
        return node;
      }
    }
  };

  min() {
    let minDig = findMin(this.radix);
    function findMin(node) {
      if (!node.left) {
        return node.data
      } else {
        return findMin(node.left)
      }
    }

    return minDig;
  };

  max() {
    let maxDig = findMax(this.radix);
    function findMax(node) {
      if (!node.right) {
        return node.data
      } else {
        return findMax(node.right)
      }
    }

    return maxDig;
  };
}
/*const tree = new BinarySearchTree()
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8).data)*/

module.exports = {
  BinarySearchTree
};
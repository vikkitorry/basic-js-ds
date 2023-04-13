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
    //create root for our tree
    this.root = null;
  }

//methoods
  addNode(currentNode, newNode) {
    if (newNode.data < currentNode.data) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.addNode(currentNode.left, newNode)
      }
    } else if (newNode.data >= currentNode.data) {
      if (currentNode.rigth === null) {
        currentNode.rigth = newNode;
      } else {
          this.addNode(currentNode.rigth, newNode)
        }
      }
  }
  findDig(node, data) {
    if (data === node.data) {
      return true;
    } else if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.findDig(node.left, data)
    } else {
      return this.findDig(node.rigth, data)
    }
  }


// methoods end

  root() {
    return this.root;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addNode(this.root, newNode)
    }
  };

  has(data) {
    let result = this.findDig(this.root, data);
    return result;
  };

  find(data) {
    let result = findNode(this.root, data);
    return result;
    function findNode(node, data) {
      if (data === node.data) {
        return node;
      } else if (node === null) {
        return null;
      } else if (data < node.data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.rigth, data)
      }
    }
  };

  remove(data) {
    this.root = removeNode(this.root, data);
    return result;
    function removeNode(node, data) {
      if (node === null) {
        return null;
      } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
      } else if (data > node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.rigth && !node.left) {
          node = null;
          return node;
        }
        if (!node.rigth) {
          node = null;
          return node;
        }
        if (!node.left) {
          node = null;
          return node;
        }
      }
    }
  };

  min() {
    let result = findMin(this.root);
    return result;
    function findMin(node) {
      if (!node.right) {
        return node.data
      } else {
        return findMax(node.right)
      }
    }
  };

  max() {
    let result = findMax(this.root);
    return result;
    function findMax(node) {
      if (!node.left) {
        return node.data
      } else {
        return findMax(node.left)
      }
    }
  };
}
const tree = new BinarySearchTree()
tree.add(9)
tree.add(5)
tree.add(4)
console.log(tree.has(4))

module.exports = {
  BinarySearchTree
};
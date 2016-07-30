var BinarySearchTree = function(value) {
  this.value = value; 
  this.left = this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  (function insertNode(node) {
    if (node === null) {
      return new BinarySearchTree(value);
    }
    var childNode;
    if (value < node.value) { 
      if (childNode = insertNode(node.left)) {
        node.left = childNode;
      }
    } else {
      if (childNode = insertNode(node.right)) {
        node.right = childNode;
      }
    }
  })(this); //null is unneeded context
};

BinarySearchTree.prototype.contains = function(value) {
  return (function checkContains(node) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      return checkContains(node.left);
    }
    return checkContains(node.right);
  })(this);
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  return (function depthFirstAWESOME(node) {
    if (node === null) {
      return;
    }
    cb(node.value);
    depthFirstAWESOME(node.left);
    depthFirstAWESOME(node.right);
  })(this);
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert = logarithmic if balanced, else linear
 contains = logarithmic if balanced, else linear
 depthFirstLog = linear

 */

var extend = function (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}; 

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  // your code here
  newTree.children = [];  // fix me
  extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // your code here
  this.children.push(Tree(value));  // fix me
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

 // addChild = constant
 // contains = linear
 // extend = linear

// alternative implementation not using native arrays.
// var extend = function (to, from) {
//   for (var key in from) {
//     to[key] = from[key];
//   }
// };
// var Tree = function(value) {
//   var newTree = {};
//   newTree.value = value;
//   // your code here
//   newTree.children = {
//     length: 0
//   };
//   extend(newTree, treeMethods);
//   return newTree;
// };

// var treeMethods = {};

// treeMethods.addChild = function(value) {
//   // your code here
//   this.children[this.children.length++] = Tree(value);  // fix me
// };

// treeMethods.contains = function(target) {
//   var recursiveFind = function (descendants) {
//     var passed = false;
//     for (var i = 0; !passed && i < descendants.length; i++) {
//       passed = descendants[i].value === target || recursiveFind(descendants[i].children);
//     }
//     return passed;
//   };
//   return this.value === target || recursiveFind(this.children);
// };


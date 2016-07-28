var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance.length = 0;
  stackInstance.storage = {};
  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length++] = value;
};

stackMethods.pop = function() {
  return this.length > 0 ? this.storage[--this.length] : null;
};

stackMethods.size = function() {
  return this.length;
};

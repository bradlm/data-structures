var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.length = 0;
  stackInstance.storage = {};
  extend(stackInstance, stackMethods);
  return stackInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length++] = value;
};

stackMethods.size = function() {
  return this.length;
};

stackMethods.pop = function() {
  return this.length > 0 ? this.storage[--this.length] : null;
};
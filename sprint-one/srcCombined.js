var FunctionalQueue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var enqueuePointer = 0;
  var dequeuePointer = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueuePointer++] = value;
    size++;
  };

  someInstance.dequeue = function() { 
    if (size > 0) {
      size--;
      return storage[dequeuePointer++];
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

var FunctionalStack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size++] = value;
  };

  someInstance.pop = function() {
    return size > 0 ? storage[--size] : null;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

var FunctionalSharedQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {
    enqueuePointer: 0,
    dequeuePointer: 0,
    length: 0,
    storage: {}
  };
  extend(queueInstance, functionalSharedQueueMethods);
  return queueInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var functionalSharedQueueMethods = {};

functionalSharedQueueMethods.size = function() {
  return this.length;
};

functionalSharedQueueMethods.enqueue = function(value) {
  this.storage[this.enqueuePointer++] = value;
  this.length++;
};

functionalSharedQueueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.dequeuePointer++];
  }
};

var FunctionalSharedStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance.length = 0;
  stackInstance.storage = {};
  extend(stackInstance, functionalSharedStackMethods);
  return stackInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var functionalSharedStackMethods = {};

functionalSharedStackMethods.push = function(value) {
  this.storage[this.length++] = value;
};

functionalSharedStackMethods.size = function() {
  return this.length;
};

functionalSharedStackMethods.pop = function() {
  return this.length > 0 ? this.storage[--this.length] : null;
};

var PrototypalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(PrototypalQueueMethods);
  queueInstance.enqueuePointer = 0;
  queueInstance.dequeuePointer = 0;
  queueInstance.length = 0;
  queueInstance.storage = {};
  return queueInstance;
};

var PrototypalQueueMethods = {};

PrototypalQueueMethods.enqueue = function(value) {
  this.storage[this.enqueuePointer++] = value;
  this.length++;
};

PrototypalQueueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.dequeuePointer++];
  }
};

PrototypalQueueMethods.size = function() {
  return this.length;
};

var PrototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(PrototypalStackMethods);
  stackInstance.length = 0;
  stackInstance.storage = {};
  return stackInstance;
};

var PrototypalStackMethods = {};

PrototypalStackMethods.push = function(value) {
  this.storage[this.length++] = value;
};

PrototypalStackMethods.pop = function() {
  return this.length > 0 ? this.storage[--this.length] : null;
};

PrototypalStackMethods.size = function() {
  return this.length;
};

var PseudoclassicalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.enqueuePointer = 0;
  this.dequeuePointer = 0;
  this.storage = {};
};

PseudoclassicalQueue.prototype.size = function() {
  return this.length;
};

PseudoclassicalQueue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[this.enqueuePointer++] = value;
};

PseudoclassicalQueue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.dequeuePointer++];
  }
};


var PseudoclassicalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

PseudoclassicalStack.prototype.push = function(value) {
  this.storage[this.length++] = value;
};

PseudoclassicalStack.prototype.pop = function() {
  return this.length > 0 ? this.storage[--this.length] : null;
};

PseudoclassicalStack.prototype.size = function() {
  return this.length;
};


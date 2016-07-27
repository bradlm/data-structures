var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = {
    enqueuePointer: 0,
    dequeuePointer: 0,
    length: 0,
    storage: {}
  };
  extend(queueInstance, queueMethods);
  return queueInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  this.storage[this.enqueuePointer++] = value;
  this.length++;
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.dequeuePointer++];
  }
};
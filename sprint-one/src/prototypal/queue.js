var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);
  queueInstance.enqueuePointer = 0;
  queueInstance.dequeuePointer = 0;
  queueInstance.length = 0;
  queueInstance.storage = {};
  return queueInstance;
};

var queueMethods = {};

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

queueMethods.size = function() {
  return this.length;
};

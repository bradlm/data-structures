var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.enqueuePointer = 0;
  this.dequeuePointer = 0;
  this.storage = {};
};

Queue.prototype.size = function() {
  return this.length;
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.storage[this.enqueuePointer++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
    return this.storage[this.dequeuePointer++];
  }
};
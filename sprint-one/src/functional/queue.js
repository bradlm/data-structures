var Queue = function() {
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

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var entry = [k, v];
  var bucket;
  // value in HT is undefined or the entry already exists
  if (this._storage.get(index) === undefined || this._storage.get(index)[0] === k) {
    this._storage.set(index, entry);
  // if the entry does not already exist and we have a collision
  } else if (!Array.isArray(this._storage.get(index)[0])) {
    bucket = [];
    bucket.push(this._storage.get(index));
    bucket.push(entry);
    this._storage.set(index, bucket);
  // if there's a bucket
  } else {
    // the entry already exists in the bucket
    bucket = this._storage.get(index);
    var indexInBucket = findIndexInBucket(k, bucket);
    if (indexInBucket !== -1) {
      bucket[indexInBucket][1] = v;
    // entry does not already exist in the bucket
    } else {
      bucket.push(entry);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  } else if (!Array.isArray(this._storage.get(index)[0])) {
    return this._storage.get(index)[1];
  } else {
    return findValueInBucket(k, this._storage.get(index));
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};

var findValueInBucket = function(key, bucket) {
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
  return undefined;
};

var findIndexInBucket = function(key, bucket) {
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return i;
    }
  }
  return -1;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant on average. worst worst case is linear.
 retrieve: constant on average. worst worst case is linear.
 remove: constant on average. worst worst case is linear.
 */



// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
  this.size = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(key) {
  this.nodeList[key] = new GNode(key);
  this.size++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(key) {
  return this.nodeList.hasOwnProperty(key);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(key) {
  for (var neighbor in this.nodeList[key].edges) {
    this.nodeList[neighbor].removeEdge(this.nodeList[key]);
  }
  delete this.nodeList[key];
  this.size--;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeList[fromNode].edges.hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[fromNode].addEdge(this.nodeList[toNode]);
  this.nodeList[toNode].addEdge(this.nodeList[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodeList[fromNode].removeEdge(this.nodeList[toNode]);
  this.nodeList[toNode].removeEdge(this.nodeList[fromNode]);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodeList) {
    cb(key);
  }
};


var GNode = function(value) {
  this.value = value;
  this.edges = {};
};

GNode.prototype.addEdge = function(node) {
  this.edges[node.value] = node;
};

GNode.prototype.removeEdge = function(node) {
  delete this.edges[node.value];
};
/*
 * Complexity: What is the time complexity of the above functions?
 */

// addNode = technically, linear b/c of potential hashtable collisions. Otherwise on average, constant time.
// contains = constant. but technically, if the hashtable is terribly implemented then it could lead to constant time.
// removeNode = linear
// hasEdge = linear unless the object uses a hashtable to keep track of all keys
// addEdge = linear
// removeEdge = linear
// forEachNode = depends on the complexity of the callback. At least linear.


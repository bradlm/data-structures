// Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = new GNode(node); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeList.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var neighbor in this.nodeList[node].edges) {
    this.nodeList[neighbor].removeEdge(node);
  }
  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeList[fromNode].edges.hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[fromNode].addEdge(toNode);
  this.nodeList[toNode].addEdge(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
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



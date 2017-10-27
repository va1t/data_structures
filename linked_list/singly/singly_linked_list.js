// singly_linked_list.js

function LinkedList() {

  this.head = null;

  this.node = function(data) {
    return {
      data: data,
      next: null
    };
  }

  this.insert = function(data) {

    var newNode = this.node(data);

    if(this.head === null) {
      this.head = newNode;
    } else {
      var currentNode = this.head;
      while(currentNode.next !== null) {
        currentNode = currentNode.next;
      };
      currentNode.next = newNode;
    }

    return newNode;
  };

  this.delete = function(data) {

    var prevNode = null;
    var currentNode = this.head;

    if(currentNode.data === data) {
      this.head = currentNode.next;
      return currentNode;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
      while(currentNode.data !== data && currentNode.next !== null) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      if(currentNode.data === data) {
        prevNode.next = currentNode.next;
        return currentNode; 
      }
    }

    return null;
  };

  this.display = function() {

    var list = [];
    var currentNode = this.head;
    list.push(currentNode);

    while(currentNode.next !== null) {
      currentNode = currentNode.next;
      list.push(currentNode);
    }

    return list;
  };

};

module.exports = LinkedList;
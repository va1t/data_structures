// stack.js

function Stack() {

  this.top = null;

  this.stackNode = function(data) {
    return {
      data: data,
      next: null
    };
  };

  this.push = function(data) {

    var stackNode = this.stackNode(data);

    if(this.top === null) {
      this.top = stackNode;
    } else {
      stackNode.next = this.top;
      this.top = stackNode;
    }

  }

  this.pop = function() {
    var stackNode = this.top;

    if(stackNode === null) {
      return null;
    } else if(stackNode.next === null) {
      this.top = null;

      return stackNode.data;
    } else {
      this.top = stackNode.next;

      return stackNode.data;
    }
  }

  this.peek = function() {
    return this.top;
  }

  this.isEmpty = function () {
    return this.top === null ? true : false;
  }

}

module.exports = Stack;
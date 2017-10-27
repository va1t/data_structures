// stack_spec.js
'use strict';
var expect = require('chai').expect;

describe('Stack', function() {
  var Stack = require("./stack.js");
  
  it('should exist', function() {
    var stack = new Stack();

    expect(stack).not.to.be.undefined;
  });

  it('should return true if stack is empty', function() {
    var stack = new Stack();

    expect(stack.isEmpty()).to.be.true;
  })

  it('should return false if stack is not empty', function() {
    var stack = new Stack();
    stack.push(5);
    
    expect(stack.isEmpty()).to.be.false;
  });

  it('should return 6 with a series of pushes and pops', function() {
    var stack = new Stack();

    stack.push(0);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
    stack.push(7);

    stack.pop();
    var actual = stack.pop();

    expect(actual).to.eql(6);
  })
});
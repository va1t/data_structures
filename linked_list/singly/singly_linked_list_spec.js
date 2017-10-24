// singly_linked_list_spec.js
'use strict';
var expect = require('chai').expect;

describe('Singly Linked List', function() {
  var linkedList = require("./singly_linked_list.js");

  it('should exist', function() {
    expect(linkedList).to.not.be.undefined;
  });

  it('should return a new node where data equals 1', function() {
    var list = new linkedList();
    var input = 1;

    var expected = 1;
    var actual = list.insert(input);

    expect(actual.data).to.eql(expected);
  });  

  it('should return a length of 5', function() {
    var list = new linkedList();

    for(var i=0; i<6; i++) {
      list.insert(i);
    }

    list.delete(1);
    var actual = list.display();

    expect(actual.length).to.eql(5);
  });

  it('should return null if data does not exist when deleting', function() {
    var list = new linkedList();

    for(var i=0; i<12; i++) {
      list.insert(i);
    }

    var actual = list.delete(22);

    expect(actual).to.eql(null);
  });

});
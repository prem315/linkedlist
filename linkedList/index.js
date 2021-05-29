"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
LinkedList.prototype.isEmpty = function() {
    console.log(this);
    return this.head === null
}

LinkedList.prototype.insertAtHead = function(data) {
    let tempNode = new Node(data);
    tempNode.nextEle = this.head;
    this.head = tempNode;
    return this;
}

LinkedList.prototype.insertAtTail = function(data) {
    let tempNode = new Node(data)
    if(this.isEmpty()) {
        this.head = node;
        return this;
    }

    let currentNode = this.head;
    while(currentNode.nextEle !== null){
        currentNode = currentNode.nextEle
    }

    currentNode.nextEle = tempNode;
    return this;
    // while()
}

let list = new LinkedList();
list.insertAtHead("1");
list.insertAtHead("2");
list.insertAtTail("3");

console.log(list.head);



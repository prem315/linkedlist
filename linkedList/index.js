"use strict";
const LinkedList = require('./LinkedList.js');
const Node = require('./Node.js');
LinkedList.prototype.isEmpty = function() {
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
}

LinkedList.prototype.search = function(data) {
    if(this.isEmpty()) {
        return false
    }
    let currentNode = this.head;
    while(currentNode !== null) {
        if(currentNode.data === data) {
            return currentNode
        }
        currentNode = currentNode.nextEle
    }
    return false
}

let list = new LinkedList();
list.insertAtHead("1");
list.insertAtHead("2");
list.insertAtTail("3");
list.insertAtTail("6");
list.insertAtTail("5");
list.insertAtTail("10");
console.log(list.search("10"))



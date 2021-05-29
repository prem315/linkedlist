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

LinkedList.prototype.deleteAtHead = function() {
    if(this.isEmpty()) {
        return false
    }
    let firstNode = this.head;
    this.head = firstNode.nextEle
    return this
}

LinkedList.prototype.deleteByValue = function(val) {
    if(this.isEmpty()) {
        return false
    }
    let currentNode = this.head
    if(currentNode.data === val) {
        this.head = currentNode.nextEle
        return true
    }
    while(currentNode.nextEle !== null) {
        if(currentNode.nextEle.data === val) {
            currentNode.nextEle = currentNode.nextEle.nextEle
            return true
        }
        currentNode = currentNode.nextEle 
    }
    return false;
}

LinkedList.prototype.deleteAtTail = function() {
    if(this.isEmpty()) {
        return false;
    }
    if(this.head.nextEle === null) {
        this.head = null
        return this
    }
    let currentNode = this.head
    while(currentNode.nextEle !== null) {
        console.log(currentNode)
        if(currentNode.nextEle.nextEle === null) {
            currentNode.nextEle = null
            return this;
        }
        currentNode = currentNode.nextEle
    }
    return false
}

let list = new LinkedList();
list.insertAtHead("2");
list.insertAtHead("1");
list.insertAtTail("3");
list.insertAtTail("6");
list.insertAtTail("5");
list.insertAtTail("10");
console.log(list.search("10"))

list.deleteAtTail();
console.log("list", list);



"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function reverseLinkedList(list) {
    let prevNode = null;
    let currentNode = list.head;
    let nextNode = null;

    while(currentNode !== null) {
        nextNode = currentNode.nextEle;
        currentNode.nextEle = prevNode;
        prevNode = currentNode
        currentNode = nextNode
    }

    list.head = prevNode;
}

let list = new LinkedList();
list.insertAtHead("1");
list.insertAtTail("2");
list.insertAtTail("3");
list.insertAtTail("4")

reverseLinkedList(list);
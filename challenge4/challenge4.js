"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function findMid(list) {
    let currentNode = list.head;
    let length = 0
    while(currentNode !== null) {
        currentNode = currentNode.nextEle;
        length = length + 1
    }

    let middle = Math.ceil(length / 2);
    let middleNode = list.head;
    for(let i = 0; i < middle; i++) {
        middleNode = middleNode.nextEle
    }
}

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(11);
list.insertAtHead(7);
list.insertAtTail(8);



findMid(list)
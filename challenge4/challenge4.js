"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function findMid(list) {
    let midNode = null;
    let length = 0;
    let tempNode = list.getHead();
    while (tempNode != null) {
        tempNode = tempNode.nextElement;
        length++;
    }
    let middle = Math.ceil(length / 2);
    midNode = list.getHead();
    for (var i = 1; i < middle; i++) {
        midNode = midNode.nextElement;
    }

    return midNode;
}

let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(11);
list.insertAtHead(7);

list.printList();

console.log(findMid(list).data);
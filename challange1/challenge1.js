"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

let list = new LinkedList();

function lengthOfLinkedList(list) {
    if(list.isEmpty()) {
        return 0
    }
    let count = 1;
    let currentNode = list.head
    while(currentNode.nextEle !== null) {
        currentNode = currentNode.nextEle;
        count = count + 1
    }
    return count
}   

list.insertAtHead("1");
list.insertAtTail("2");
list.insertAtTail("3")
list.insertAtTail("4")
list.insertAtTail("5")

console.log(lengthOfLinkedList(list))

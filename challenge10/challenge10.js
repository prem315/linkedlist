"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function searchRecursion(node, val) {
    if(node === null) {
        return false
    }
    if(node.data === val) {
        console.log("found node" ,node)
        return true
    }
    return searchRecursion(node.nextEle, val)
}


let list = new LinkedList();
list.insertAtHead(4);
list.insertAtHead(10);
list.insertAtHead(40);
list.insertAtHead(5);

searchRecursion(list.head, 4);
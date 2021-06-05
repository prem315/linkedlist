"use strict";
const LinkedList = require('./linkedList.js');
const Node = require('./node.js');

function findNth(list, n) {
    let nthNode = null;
    let length = 0;
    let tempNode = list.head;
    while (tempNode != null) {
        tempNode = tempNode.nextEle;
        length++;
    }
    let position = length - n;
    if (position < 0 || position > length) {
        return null;
    }
    nthNode = list.head
    for (var i = 0; i < position; i++) {
        nthNode = nthNode.nextElement;
    }
    return nthNode;
}

let l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);


findNth(l1, 100)
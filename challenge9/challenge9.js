"use strict";
const LinkedList = require('./linkedList.js');
const Node = require('./node.js');


function palindromeList(list) {
    // find a mid node using two pointers
    let fastPointer = list.head;
    let slowPointer = list.head;
    let mid = null;

    while(fastPointer !== null && fastPointer.nextEle !== null) {
        fastPointer = fastPointer.nextEle.nextEle;
        slowPointer = slowPointer.nextEle;
    }

    // odd                         // even
    // 1 -> 2 -> 3 -> 2 -> 1       // 1 -> 2 -> 2 -> 1
    
    if(fastPointer !== null) {
        mid = slowPointer.nextEle
    } else {
        mid = slowPointer
    }

    let prevNode = null, nextNode = null
    while(mid !== null) {
        nextNode = mid.nextEle
        mid.nextEle = prevNode
        prevNode = mid
        mid = nextNode
    }

    let curentNode = list.head 
    while(prevNode !== null) {
        if(prevNode.data !== curentNode.data) {
            return false
        } 
        prevNode = prevNode.nextEle;
        curentNode = curentNode.nextEle;
    }

    return true
}

let list = new LinkedList();
list.insertAtHead(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(2);
list.insertAtTail(1);

const res = palindromeList(list)
console.log(res);
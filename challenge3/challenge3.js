"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function detectLoop(list) {
    if(list.isEmpty()) {
        return false
    }

    let currentNode = list.head;
    let set = new Set();
    
    while(currentNode !== null) {
        console.log(currentNode);
        // if(obj[])
        if(set.has(currentNode)) {
            return true
        } 

        set.add(currentNode);
        currentNode = currentNode.nextEle
    }

    return false
}

function detectLoopUsingFloydAlgo(list) {
    let moveOneStep = list.head;
    let moveTwoStep = list.head;

    while(moveOneStep !== null && moveTwoStep !== null && moveTwoStep.nextEle !== null) {
        moveOneStep = moveOneStep.nextEle;
        moveTwoStep = moveTwoStep.nextEle;

        if(moveOneStep === moveTwoStep) {
            return true
        }
    }

    return false
}


let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.head
let node = list.head;

// Adding a loop
for(var i=0; i<4; i++){
    if(node.nextEle == null){
        node.nextEle = head.nextEle;
        break;
    }
    node = node.nextEle
}

console.log(detectLoop(list))
console.log(detectLoopUsingFloydAlgo(list))

"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function removeDuplicate(list) {

    let outerNode = list.head;
    while(outerNode !== null) {
        // console.log(outerNode);
        let innerNode = outerNode;
        while(innerNode !== null) {
            if(innerNode.nextEle !== null && outerNode.data === innerNode.nextEle.data ) {
                // remove
                innerNode.nextEle = innerNode.nextEle.nextEle;
            } else {
                innerNode = innerNode.nextEle
            }
        }
        outerNode = outerNode.nextEle
    }

    return list

}

let list = new LinkedList();

list.insertAtHead(8);
list.insertAtHead(9);
list.insertAtHead(8);
list.insertAtHead(22);
list.insertAtHead(12);
list.insertAtHead(12);
list.insertAtHead(14);
list.insertAtHead(8);

removeDuplicate(list)
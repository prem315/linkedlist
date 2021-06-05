"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function removeDuplicates(list) {
    let outerNode = list.head;
    while(outerNode !== null) {
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


function intersectionLists(list1, list2) {

    let linkedlist1 = list1.head;
    let linkedlist2 = list2.head;
    let linkedlist = new LinkedList();
    
    while(linkedlist1 !== null) {
        while(linkedlist2 !== null) {
            if(linkedlist1.data === linkedlist2.data) {
                console.log("found", linkedlist1.data)
                linkedlist.insertAtTail(linkedlist1.data)
            }
            linkedlist2 = linkedlist2.nextEle
        }
        linkedlist2 = list2.head
        linkedlist1 = linkedlist1.nextEle;
    }

    return removeDuplicates(linkedlist)
}

let mylist1 = new LinkedList();
let mylist2 = new LinkedList();
mylist1.insertAtHead(8);
mylist1.insertAtHead(22);
mylist1.insertAtHead(15);
mylist1.insertAtHead(14);
mylist1.insertAtHead(8);

mylist2.insertAtHead(21);
mylist2.insertAtHead(14);
mylist2.insertAtHead(7);
mylist2.insertAtHead(14);
mylist2.insertAtHead(15);


intersectionLists(mylist1, mylist2)

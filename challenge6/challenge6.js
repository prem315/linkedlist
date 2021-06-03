"use strict";
const LinkedList = require('./linkedlist.js');
const Node = require('./node.js');

function union(list1, list2) {
    if (list1.isEmpty()) {
        return list2;
    } else if (list2.isEmpty()) {
        return list1;
    }
  
    let start = list1.head;
  
    while (start.nextEle !== null) {
        start = start.nextEle;
    }
  
    start.nextEle = list2.head;
    list1.removeDuplicates();
  
    return list1;
  }
  
  let ulist1 = new LinkedList();
  let ulist2 = new LinkedList();
  ulist1.insertAtHead(8);
  ulist1.insertAtHead(22);
  ulist1.insertAtHead(15);
  ulist1.insertAtHead(22);
  ulist1.printList();
  
  
  ulist2.insertAtHead(21);
  ulist2.insertAtHead(14);
  ulist2.insertAtHead(21);
  ulist2.insertAtHead(8);
  ulist2.insertAtHead(7);
  ulist2.printList();
  
  union(ulist1, ulist2);
  ulist1.printList();
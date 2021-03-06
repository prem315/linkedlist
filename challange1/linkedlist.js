
"use strict";
const Node = require('./Node.js');

module.exports = class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null
    }
    
    insertAtHead(data) {
        let tempNode = new Node(data);
        tempNode.nextEle = this.head;
        this.head = tempNode;
        return this;
    }
    
    insertAtTail(data) {
        let tempNode = new Node(data)
        if(this.isEmpty()) {
            this.head = tempNode;
            return this;
        }
    
        let currentNode = this.head;
        while(currentNode.nextEle !== null){
            currentNode = currentNode.nextEle
        }
    
        currentNode.nextEle = tempNode;
        return this;
    }
    
    search(data) {
        if(this.isEmpty()) {
            return false
        }
        let currentNode = this.head;
        while(currentNode !== null) {
            if(currentNode.data === data) {
                return currentNode
            }
            currentNode = currentNode.nextEle
        }
        return false
    }
    
    deleteAtHead() {
        if(this.isEmpty()) {
            return false
        }
        let firstNode = this.head;
        this.head = firstNode.nextEle
        return this
    }
    
    deleteByValue(val) {
        if(this.isEmpty()) {
            return false
        }
        let currentNode = this.head
        if(currentNode.data === val) {
            this.head = currentNode.nextEle
            return true
        }
        while(currentNode.nextEle !== null) {
            if(currentNode.nextEle.data === val) {
                currentNode.nextEle = currentNode.nextEle.nextEle
                return true
            }
            currentNode = currentNode.nextEle 
        }
        return false;
    }
    
    deleteAtTail() {
        if(this.isEmpty()) {
            return false;
        }
        if(this.head.nextEle === null) {
            this.head = null
            return this
        }
        let currentNode = this.head
        while(currentNode.nextEle !== null) {
            if(currentNode.nextEle.nextEle === null) {
                currentNode.nextEle = null
                return this;
            }
            currentNode = currentNode.nextEle
        }
        return false
    }
    
  
}
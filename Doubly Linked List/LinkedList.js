import { Node } from "./Node.js";

const _head = {};
const _tail = {};

export class LinkedList{
    constructor() {
        _head.this = null;
        _tail.this = null;
    }

    insertNode(data) {
        const newNode = new Node(data);

        if (this.isEmpty) {
            newNode.prev = null;
            newNode.next = null;
            _head.this = newNode;
            _tail.this = newNode;
        }
        else {
            _tail.this.next = newNode;
            newNode.prev = _tail.this;
            newNode.next = null;
            _tail.this = newNode;
        }
    }

    attachHead(data) {
        if (this.isEmpty) this.insertNode(data);
            
        else {
            const newNode = new Node(data);

            newNode.prev = null;
            newNode.next = _head.this;
            _head.this.prev = newNode;
            _head.this = newNode;
        }
    }

    insertNodeAt(posData, data) {
        if (this.isEmpty) this.insertNode(data);
            
        else {
            if (_head.this.data === posData) this.attachHead(data);
                
            else {
                let pointer = _head.this;
                
                try {
                    while (posData !== pointer.next.data)
                        pointer = pointer.next;
    
                    const newNode = new Node(data);
    
                    newNode.prev = pointer;
                    newNode.next = pointer.next;
                    pointer.next = newNode;
                    newNode.next.prev = newNode;
                }
                catch (e) {
                    throw new Error(`Node doesn't exist`);
                }
            }
        }
    }

    removeHead() {
        if (this.isEmpty) throw new Error("Linkedlist is empty");

        const data = _head.this.data;

        _head.this = _head.this.next;
        _head.this.prev = null;
        return data;
    }

    removeTail() {
        if (this.isEmpty) throw new Error('Linkedlist is empty');

        if (_head.this === _tail.this) {
            return this.removeHead();
        }

        const data = _tail.this.data;

        _tail.this = _tail.this.prev;
        _tail.this.next = null;
        return data;
    }

    removeNodeAt(posData) {
        
        if (this.isEmpty) throw new Error("Linkedlist is empty");

        if (posData === _head.this.data) {
            return this.removeHead();
        }

        if (posData === _tail.this.data) { 
            return this.removeTail();
        } 

        try {
            let pointer = _head.this;
    
            while (posData !== pointer.next.data)
                pointer = pointer.next;
            
            pointer.prev.next = pointer.next;
            pointer.next.prev = pointer.prev;
            pointer.next = null;
            pointer.prev = null;   
        }
        catch (e) {
            throw new Error(`Node doesn't exist`);
        }

    }

    traverse() {
        let pointer = _head.this;

        if (this.isEmpty) throw new Error('Linkedlist is empty');
        else {
            console.log('----------');
            while (pointer.next !== null) {
                console.log(pointer.data)
                pointer = pointer.next;
            }
            console.log(pointer.data);
            console.log("----------");
        }
    }

    get isEmpty() {
        return _head.this === null && _tail.this === null;
    }
}
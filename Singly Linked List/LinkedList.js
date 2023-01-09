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
            newNode.next = null;
            _head.this = newNode;
            _tail.this = newNode;
        }
        else {
            newNode.next = null;
            _tail.this.next = newNode;
            _tail.this = newNode;
        }
    }

    attachHead(data) {
        if (this.isEmpty) this.insertNode(data)
        else {
            const newNode = new Node(data);
    
            newNode.next = _head.this;
            _head.this = newNode;
        }
    }

    insertNodeAt(posData, data) {
        if (this.isEmpty) this.insertNode(data);

        if (posData === _head.this.data) this.attachHead(data);
        
        else {
            let pointer = _head.this;
    
            try {
                while (posData !== pointer.next.data)
                    pointer = pointer.next;
                
                const newNode = new Node(data);
        
                newNode.next = pointer.next;
                pointer.next = newNode;
            }
            catch (e) {
                throw new Error(`Node doesn't exist`);
            }
        }
        
    }

    removeHead() {
        if (this.isEmpty) throw new Error('Linked list is empty');

        const data = _head.this.data;

        _head.this = _head.this.next;
        return data;
    }

    removeTail() {
        if (this.isEmpty) throw new Error('Linked list is empty');

        let pointer = _head.this;
        const data = _tail.this.data;

        while (pointer.next !== _tail.this)
            pointer = pointer.next;
        
        _tail.this = pointer
        _tail.this.next = null;
        return data;
    }

    removeNodeAt(posData) {
        if (posData === _head.this.data) {
            _head.this = _head.this.next;
        }
        else {
            let pointer = _head.this;

            try {
                while (pointer.next.data !== posData)
                    pointer = pointer.next
                
                const rmNode = pointer.next;
                const next = rmNode.next;
                pointer.next = next;
                rmNode.next = null;   
            }
            catch (e) {
                throw new Error(`Node doesn't exist`);
            }
        }
    }

    clear() {
        _head.this = null;
        _tail.this = null;
    }

    traverse() {
        if (this.isEmpty) throw new Error('Linked list is empty');
        let pointer = _head.this;

        console.log('----------');
        while (pointer.next !== null) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
        console.log(pointer.data);
        console.log("----------");
    }

    get isEmpty() {
        return _head.this === null && _tail.this === null;
    }
}
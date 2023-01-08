import { Node } from "./Node.js";

export class LinkedList{
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeNode() {
        if (this.head === null) throw new Error('Linked list is empty');

        let pointer = this.head;

        while (pointer.next !== this.tail)
            pointer = pointer.next;
        
        pointer.next = null;
        this.tail = pointer;
    }

    removeAt(data) {
        if (data === this.head.data) {
            this.head = this.head.next;
        }
        else {
            let pointer = this.head;

            while (pointer.next.data !== data)
                pointer = pointer.next
            
            const rmNode = pointer.next;
            const next = rmNode.next;
            pointer.next = next;
            rmNode.next = null;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }

    traverse() {
        if (this.head === null) throw new Error('Linked list is empty');
        let pointer = this.head;

        console.log('----------');
        while (pointer.next !== null) {
            console.log(pointer.data);
            pointer = pointer.next;
        }
        console.log(pointer.data);
        console.log("----------");
    }
}
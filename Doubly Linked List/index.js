import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.insertNode(10);
list.insertNode(20);
list.insertNode(30);
list.insertNode(40);
list.insertNode(50);
list.traverse();
list.attachHead(5);
list.traverse();
list.insertNodeAt(40, 35);
list.traverse();
list.removeHead();
list.traverse();
list.removeTail();
list.traverse();
list.removeNodeAt(30);
list.traverse()
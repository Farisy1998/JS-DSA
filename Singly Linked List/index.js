import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.insertNode(10);
list.insertNode(20);
list.insertNode(30);
list.insertNode(40);
list.insertNode(50);
list.traverse();
list.insertNodeAt(10, 5);
list.traverse();
list.insertNodeAt(40, 35);
list.traverse();
list.insertNodeAt(50, 45);
list.traverse();
list.insertNode(55);
list.traverse()
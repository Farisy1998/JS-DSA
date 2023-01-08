import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();
list.addNode(10);
list.addNode(20);
list.addNode(30);
list.addNode(40);
list.addNode(50);
list.traverse();
list.removeAt(20);
list.traverse()
list.removeAt(40);
list.traverse();
list.removeAt(30);
list.removeAt(10);
list.traverse()
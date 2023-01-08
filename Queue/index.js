import { QueueDemo } from "./QueueDemo.js";

const q = new QueueDemo();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
console.log(q.getQueue());
console.log(q.peek());
q.dequeue();
console.log(q.getQueue());
console.log(q.peek())
console.log(q.length);
q.dequeue();
q.dequeue();
q.dequeue();
console.log(q.getQueue())
import { ArrayDemo } from "./ArrayDemo.js";

const array = new ArrayDemo();
console.log(array.length);
array.add('a');
array.add("b");
array.add("c");
array.add('d');
console.log(array.length);
console.log(array.include('a'));
console.log(array.getArray());
console.log(array.addAt(3, 6))
console.log(array.getArray())
console.log(array.replace(1, 3));
console.log(array.getArray());
array.add("d");
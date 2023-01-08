import { ArrayDemo } from "./ArrayDemo.js";

const array = new ArrayDemo();
array.add(1);
array.add(2);
array.add({ value: 10 });
array.add(6);
console.log(array.getArray());
array.replace(2, 5);
console.log(array.getArray())
console.log(array.length)
array.remove();
console.log(array.length);
array.clear();
console.log(array.getArray())
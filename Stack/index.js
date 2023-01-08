import { Stack } from "./Stack.js";

const s = new Stack();
console.log(s.count);
s.push('a');
s.push('b');
s.push('c');
console.log(s.peek())
console.log(s.count);
console.log(s.getStack());
s.pop();
console.log(s.getStack())

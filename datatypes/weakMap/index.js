const weakMap = new WeakMap();

const obj = {};

weakMap.set(obj, obj);
// weakMap.set('obj', obj);
let john = { name: 'John' };

weakMap.set(john, john);

console.log(weakMap.get(john));

john = null;

console.log(weakMap.get(john));
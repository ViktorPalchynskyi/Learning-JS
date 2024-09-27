function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); 
console.log(curriedMultiply(2, 3)(4)); 
console.log(curriedMultiply(2)(3, 4)); 

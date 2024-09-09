function hello(name) {
    return `Hello, ${name}`;
}

const sayHi = function (...args) {
    return `Hi, ${args.split(' ')}`;
};

const sayHiArrow = () => 'Hi';

// console.log(hello.name);
// console.log(sayHi.name);
// console.log(sayHiArrow.name);

console.log(hello.length);
console.log(sayHi.length);
console.log(sayHiArrow.length);

function countCalls() {
    console.log('Call');

    countCalls.counter++;
}

countCalls.counter = 0;

countCalls();
console.log(countCalls.counter);
countCalls();
countCalls();
countCalls();
console.log(countCalls.counter);

let saySomethin = function func(some) {
    if (!some) {
        func('Text');
    }

    console.log(some);
};

saySomethin();

let newSome = saySomethin;
saySomethin = null;

newSome('Test');
newSome();

function makeCounter() {
    let count = 0;

    function counter() {
        count++;
    }

    counter.set = (value) => (count = value);
    counter.decrease = () => count--;
    counter.get = () => console.log(count);

    return counter;
}

const counter = makeCounter();

counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter();
counter.get();
counter.set(44);
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();

counter.get();

const sum = (a) => {
    let total = a;

    function f(b) {
        total += b;

        return f;
    }

    f.toString = function () {
        return total;
    };

    return f;
};

console.log(sum(1)(2)(3)(4)(5).toString() === 15);

function test(a, b, c) {
    console.log(arguments);
}

test(1, 2, 3);

console.log(test.arguments);

const animal = { isAlive: true };

const rabbit = Object.create(animal);

console.log(rabbit.isAlive);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, { isRabbit: true });

console.log(rabbit.isAlive, rabbit.isRabbit);

const empty = Object.create(null);

console.log(empty.__proto__);

const dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(', ');
        },
    },
});

dictionary.apple = 'Apple';
dictionary.__proto__ = 'test';

for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary.toString()); // "apple,__proto__"

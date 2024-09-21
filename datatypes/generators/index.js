function* generateSequence() {
    yield 1;
    yield 2;
    yield 'Something';
    yield () => 'hello';

    return 3;
}

const generator = generateSequence();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next().value());
console.log(generator.next());

const range = {
    from: 1,
    to: 10,
    *[Symbol.iterator]() {
        for (let value = this.from; value <= this.to; value++) {
            yield value;
        }
    },
};

for (const element of range) {
    console.log(element);
}

function* generateSequence2(start, end) {
    for (let index = start; index <= end; index++) yield index;
}

function* generatePasswordCode() {
    yield* generateSequence2(48, 57);
    yield* generateSequence2(65, 90);
    yield* generateSequence2(97, 122);
}

let str = '';

for (const code of generatePasswordCode()) {
    str += String.fromCharCode(code);
}

console.log(str);

function* gena() {
    const res = yield '2 + 2 = ?';

    console.log(res);
}

const gena1 = gena();
const question = gena1.next().value;
console.log(question);

gena1.next(4);


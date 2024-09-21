const target = {};
const proxy1 = new Proxy(target, {});

proxy1.test = 5;

console.log(target);

let numb = [10, 24, 12, 24];

numb = new Proxy(numb, {
    get(target, prop) {
        return prop in target ? target[prop] : 0;
    },
});

console.log(numb[2]);
console.log(numb[222]);

let numbers = [];

numbers = new Proxy(numbers, {
    set(t, p, v) {
        if (typeof v === 'number') {
            t[p] = v;

            return true;
        }

        return false;
    },
});

numbers.push(1);
numbers.push(3);
console.log(numbers);

// numbers.push('some');

let user = {
    name: 'Вася',
    age: 30,
    _password: '***',
};

user = new Proxy(user, {
    ownKeys(t) {
        return Object.keys(t).filter((k) => !k.startsWith('_'));
    },
});

for (const key in user) {
    console.log('keys', key);
}

let user1 = {};

user1 = new Proxy(user1, {
    ownKeys(t) {
        return ['a', 'b', 'c'];
    },
    getOwnPropertyDescriptor(t, p) {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});

console.log(Object.keys(user1));

let range = {
    from: 1,
    to: 25,
};

range = new Proxy(range, {
    has(t, p) {
        // if (typeof p !== 'number') return false;

        return p >= t.from && p <= t.to;
    },
});

console.log(21 in range);
console.log(1 in range);
console.log(199 in range);
console.log('fff' in range);

function delay(f, ms) {
    return new Proxy(f, {
        apply(t, thisArg, args) {
            setTimeout(() => t.apply(thisArg, args), ms);
        },
    });
}

function sayHi(user) {
    console.log(`Привет, ${user}!`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // 1 (*) прокси перенаправляет чтение свойства length на исходную функцию

// sayHi('Вася');

let user3 = {
    name: 'Petro',
};

user3 = new Proxy(user3, {
    get(t, p, r) {
        console.log(`Get ${p}`);

        return Reflect.get(t, p, r);
    },
    set(t, p, v, r) {
        console.log(`Set ${v}`);

        return Reflect.set(t, p, v, r);
    },
});

let name = user3.name;
user3.name = 'Петя';

const revokes = new WeakMap();

let { proxy, revoke } = Proxy.revocable({ data: 'some data' }, {});

revokes.set(proxy, revoke);

console.log(proxy.data);

revoke = revokes.get(proxy);

revoke();

console.log(proxy.data);

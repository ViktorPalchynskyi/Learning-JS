let user = {
    name: 'Viktor',
};

function wrap(target) {
    return new Proxy(target, {
        get(t, p, r) {
            if (t[p] === undefined)
                throw new ReferenceError('Property not exists.');

            return Reflect.get(...arguments);
        },
    });
}

user = wrap(user);

console.log(user.name);
// console.log(user.age);

let array = [1, 2, 3];

array = new Proxy(array, {
    get(t, p, r) {
        if (p < 0) return t[t.length + Number(p)];

        return Reflect.get(...arguments);
    },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

const handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function (handler) {
        target[handlers].push(handler);
    };

    return new Proxy(target, {
        set(t, p, v) {
            const success = Reflect.set(...arguments);

            if (success) t[handlers].forEach((h) => h(p, v));

            return success;
        },
    });
}

let user23 = {};
user23 = makeObservable(user);

user23.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user23.name = 'John';

const range = {
    from: 1,
    to: 5,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            return this.current <= this.last
                ? { done: false, value: this.current++ }
                : { done: true };
        },
    };
};

for (const element of range) {
    console.log(element);
}

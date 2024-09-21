String.prototype.showMe = function () {
    console.log(this);
};

'zxcv'.showMe();

Function.prototype.defer = function (time) {
    return (...args) => {
        setTimeout(() => console.log(this(...args)), time);
    };
};

Function.prototype.defer2 = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    };
};

function f(a, b) {
    return a + b;
}

f.defer(1000)(1, 2);

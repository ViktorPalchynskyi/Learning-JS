const animal = { isAlive: true };

function Rabbit(name) {
    this.name = name;
    this.isJump = true;
}

Rabbit.prototype.jump = function() {
    console.log('JUMP!');
};

Rabbit.prototype = { ...Rabbit.prototype, ...animal }
console.log(Rabbit.prototype);

const rabbit = new Rabbit('Bugs');


console.log(rabbit.constructor === Rabbit);

console.log(rabbit.constructor);

rabbit.jump();
console.log(rabbit.isAlive);

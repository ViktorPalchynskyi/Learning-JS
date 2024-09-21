function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function () {
    console.log(`${this.name} make sound.`);
};

function Dog(name, breed) {
    var hunger = 100;

    Animal.call(this, name);
    this.breed = breed;

    this.feed = function () {
        hunger -= 10;
    };

    this.hunger = function () {
        return hunger;
    };
}

Dog.prototype = { ...Object.create(Animal), constructor: Dog };

Dog.prototype.makeSound = function () {
    Animal.prototype.makeSound.call(this);
    console.log(`The dog with breed ${this.breed} is barking!`);
};

var myDog = new Dog('Sharik', 'Dvornyaga');
var mySecondDog = new Dog('Barbos', 'Doberman');

myDog.makeSound();
myDog.feed();
myDog.feed();
console.log(myDog.hunger());
console.log(mySecondDog.hunger());

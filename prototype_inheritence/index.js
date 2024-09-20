const animal = { eats: true };
const rabbit = { jumps: true };

rabbit.__proto__ = animal;

console.log(rabbit.eats);

for (const prop in rabbit) {
    if (rabbit.hasOwnProperty(prop)) console.log(prop, rabbit[prop]);
}

let head = {
    glasses: 1,
};

let table = {
    pen: 3,
};

let bed = {
    sheet: 1,
    pillow: 2,
};

let pockets = {
    money: 2000,
};

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

console.log(pockets.pen, bed.glasses);

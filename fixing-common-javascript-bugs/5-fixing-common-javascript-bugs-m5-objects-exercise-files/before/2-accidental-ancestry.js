function Animal(name) { this.name = name; }
Animal.prototype.eat = function () {
    console.log(this.name + " is eating");
};
Animal.prototype.sleep = function () {
    console.log(this.name + " is sleeping");
};

function Cat(name) { this.name = name; }
Cat.prototype = Animal.prototype;
Cat.prototype.eat = function () {
    console.log(this.name + " is eating");
    this.sleep();
};

var cat = new Cat("Fluffy");
cat.eat();

console.log(cat instanceof Animal);
console.log(cat instanceof Cat);
console.log(cat.constructor === Animal);
console.log(cat.constructor === Cat);

function Cat(name, breed, color) {
    this.name = name || "Unknown";
    this.breed = breed || "Unknown";
    this.color = color || "Unknown";
}

var fluffy = new Cat("Fluffy", "", "White"),
    midnight = Cat("Midnight", "", "Black");

console.log(JSON.stringify(fluffy));
console.log(JSON.stringify(midnight));
console.log(window.name, window.breed, window.color);


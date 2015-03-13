var store = (function () {
    var prices = {
        apple: 1.25,
        banana: 0.75,
        orange: 1.0,
        passionfruit: 1.5,
        pear: 0.5
    }, getPrice = function (item, quantity) {
        return prices[item] * quantity;
    };

    return { getPrice: getPrice };
}());
console.log("2: " + store.getPrice("passionfruit", 2));

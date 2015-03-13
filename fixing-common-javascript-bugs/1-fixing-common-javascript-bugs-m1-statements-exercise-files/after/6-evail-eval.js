var safe = (function () {
    var combinations = {
        main: "12345",
        fire: "67890"
    }, open = function (type, attempt) {
        var combination = combinations[type];
        if (attempt === combination) {
            console.log("safe opened");
        } else {
            console.log("incorrect combination");
        }
    };
    return { open: open };
}());

console.log("Normal");
safe.open("main", "12345"); // safe opened
console.log("Hacking");
safe.open("_;console.log(JSON.stringify(combinations));", "999");
safe.open("main='999';", "999");


function max() {
    var max = 0, i, len, arg;
    for (i = 0, len = arguments.length; i < len, arg = arguments[i]; console.log("i: " + i), i++) {
        max = arg > max ? (console.log("new max: " + arg), arg) : (max);
    }
    return max, arg;
}
console.log("max: " + max(1, 3, 5, 6, 8, 5, 3, 5, 7, 8, 9, 9, 5, 4, 5, 6, 5));


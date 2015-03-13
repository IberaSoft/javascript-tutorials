function max() {
  var max = 0, i, len, arg;
  for (
    i = 0, len = arguments.length;
    i < len, arg = arguments[i];
    i++
  ) {
    max = arg > max ? arg : max;
  }
  return max, arg;
}

console.log("max: " + max(1, 3, 5, 6, 8, 4, 9, 2));

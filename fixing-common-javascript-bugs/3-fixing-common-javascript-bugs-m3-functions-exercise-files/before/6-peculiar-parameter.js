function sum() {
  var result = 0;
  arguments.forEach(function (number) {
    result += number;
  });
  return result;
}

function average() {
  return sum.apply(null, arguments) / arguments.length;
}

console.log(sum(1, 2, 3, 4, 5));
console.log(average(10, 9.5, 8, 9.5, 10));

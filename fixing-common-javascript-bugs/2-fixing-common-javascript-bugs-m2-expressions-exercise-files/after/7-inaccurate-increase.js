// Desired Output: ["apple-1", "orange-2", "banana-3"]

var fruit = ["apple-1"], index = 0, count = 1;

index += 1;
count += 1;
fruit[index] = "orange-" + count;

index += 1;
count += 1;
fruit[index] = "banana-" + count;

console.log(JSON.stringify(fruit));

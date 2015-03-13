var dataFromServer = "{ name: 'John Smith', phone: [ '555-123-4567', '123-456-7890' ], age: 28 }";

var parsed = JSON.parse(dataFromServer);

console.log(parsed);

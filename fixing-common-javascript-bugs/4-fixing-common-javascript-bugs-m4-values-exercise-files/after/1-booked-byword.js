var collection = (function() {
    var items = [];
    var add = function(item) { items.push(item); };
    var get = function(index) { return items[index]; };
    var remove = function(index) { items.splice(index, 1); };
    
    return {
        add: add,
        get: get,
        "delete": remove,
        items: items
    };
}());

collection.add("bacon");
collection.add("eggs");
collection.add("cheese");
console.log(JSON.stringify(collection.items));
console.log(collection.get(0));
collection["delete"](1);
console.log(JSON.stringify(collection.items));

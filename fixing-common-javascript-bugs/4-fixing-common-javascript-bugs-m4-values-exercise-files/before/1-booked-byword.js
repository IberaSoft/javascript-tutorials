var collection = (function() {
    var items = [];
    var add = function(item) { items.push(item); };
    var get = function(index) { return items[index]; };
    var delete = function(index) { items.splice(index, 1); };
    
    return {
        add: add,
        get: get,
        delete: delete,
        items: items
    };
}());

collection.add("bacon");
collection.add("eggs");
collection.add("cheese");
console.log(JSON.stringify(collection.items));
console.log(collection.get(0));
collection.xdelete(1);
console.log(JSON.stringify(collection.items));


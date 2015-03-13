try { sayHello()  } catch (e) { console.log(e.message) }

try { sayGoodbye() } catch (e) { console.log(e.message) }

var sayHello = function () { console.log("Hello") };

function sayGoodbye() { console.log("Goodbye") }

sayHello();

sayGoodbye();


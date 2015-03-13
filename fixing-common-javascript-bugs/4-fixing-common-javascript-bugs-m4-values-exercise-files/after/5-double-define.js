(function() {
  "use strict";

  var person = {
    name: "John Smith",
    phone: { home: "555-123-4567", cell: "555-987-6543" },
    address: "123 White Ave.",
    city: "Nashville", state: "TN", zip: "90210",
    toString: function() {
      return this.name + ": " + this.phone.home;
    }
  };
  console.log(person.toString());
}());


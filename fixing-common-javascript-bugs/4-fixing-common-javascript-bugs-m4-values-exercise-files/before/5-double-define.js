(function() {
    
    var person = {
        firstName: "John",
        lastName: "Smith",
        birthday: "12/01/1975",
        phone: "(555) 123-4567",
        ssn: "123-45-6789",
        address: "123 White Ave.",
        city: "Nashville",
        state: "TN",
        zip: "90210",
        phone: "(555) 987-65432",
        toString: function() {
            return this.firstName + " " + this.lastName + ": " + this.phone;
        }
    };
    
    alert(person.toString());
}());

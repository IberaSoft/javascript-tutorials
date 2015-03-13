/* globals moment: true */

var people = [
    { fname: "John", lname: "Smith", birthday: "1/1/1978" },
    { fname: "Jane", lname: "Smith", birthday: "2/2/1979" },
    { fname: "Jack", lname: "Smith", birthday: "3/3/1981" },
    { fname: "Juli", lname: "Smith", birthday: "4/4/1982" }
];

people.filter(function (person) {
    return new Date(person.birthday).getFullYear() < 1980;
}).map(function (person) {
    return {
        name: person.fname + " " + person.lname,
        age: moment().diff(moment(person.birthday), "years")
    };
});

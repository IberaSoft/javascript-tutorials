var student = {
  name: "John Smith",
  resume: [],
  study: function (item) {
    console.log(this.name + " is studying " + item);
    function addToResume(item) { this.resume.push(item) }
    addToResume(item);
  }
}, memorize = student.study;

student.study("chemistry");
console.log(student.resume);
memorize("history");
console.log(student.resume);


var student = {
  name: "John", resume: [],
  study: function (item) {
    var that = this;
    console.log(this.name + " is studying " + item);
    function addToResume(item) { that.resume.push(item) }
    addToResume(item);
  }
}, memorize = student.study;

student.study("chemistry");
console.log(student.resume);
memorize.call(student, "history");
console.log(student.resume);


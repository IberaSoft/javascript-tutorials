var score = 1000;

function play() {
  console.log("begin: " + score);
  if (!score) {
    console.log("setting default");
    var score = 100;
  }
  console.log("end: " + score);
}

console.log(score); play(); console.log(score);

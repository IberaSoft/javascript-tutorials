var contestants = ["John Smith", "Jane Smith"];
function isWinner(person) {
  var winner = contestants.some(function (contestant) {
    return person.name === contestant && person.winner;
  });
  if (winner) { console.log(person.name + " :)"); }
  else { console.log(person.name + " :("); }
}

isWinner({ name: "Elijah Manor", winner: false });

isWinner({ name: "John Smith", winner: true });


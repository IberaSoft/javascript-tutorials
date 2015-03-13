var contestants = ["John Smith", "Jane Smith"];
function isWinner(person) {
  var winner = contestants.some(function (contestant) {
    return person.name === contestant && person.winner;
  });
  if (winner) { console.log(person.name + " :)"); }
  else { console.log(person.name + " :("); }
}

isWinner({ name: new String("Elijah Manor"), winner: new Boolean(false) });

isWinner({ name: new String("John Smith"), winner: new Boolean(true) });

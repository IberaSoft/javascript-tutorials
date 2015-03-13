function purchase(item, amount) {
  amount = parseFloat(amount);
  if (isNaN(amount)) { throw "Amount is not a number" }
  console.log("Got " + item + ": $" + amount.toFixed(2));
}

try {
  purchase("Eggs", "1.75");
  purchase("Bacon", "priceless");
} catch (e) {
  console.log(e);
}

function purchase(item, amount) {
    amount = parseInt(amount);
    console.log("Got " + item + ": $" + amount.toFixed(2));
}

purchase("Eggs", "01");
purchase("Bacon", "08");


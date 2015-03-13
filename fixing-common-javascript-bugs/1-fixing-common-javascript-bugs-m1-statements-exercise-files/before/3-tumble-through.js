function getPrice(item) {
    var price = 0;

    switch (item) {
        case "apple": price = 1.25; break;
        case "banana": price = 0.75; break;
        case "orange": price = 1.00; break;
        case "passionfruit": price = 1.50;
        case "pear": price = .50; break;
        default: price = 0;
    }

    return price;
}

console.log(getPrice("passionfruit"));

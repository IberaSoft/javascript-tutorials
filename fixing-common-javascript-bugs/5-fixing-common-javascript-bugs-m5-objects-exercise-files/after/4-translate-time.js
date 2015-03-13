var dataFromServer = [{
    "Name": "John Smith",
    "Birthday": "\/Date(1330848000000-0800)\/"
}, {
    "Name": "Jane Smith",
    "Birthday": "\/Date(1320825600000-0800)\/"
}];

var dataFromServer = dataFromServer.map(function (item) {
    return {
        name: item.Name,
        birthday: moment(item.Birthday).toDate(),
    };
});

console.log("mapped", dataFromServer);


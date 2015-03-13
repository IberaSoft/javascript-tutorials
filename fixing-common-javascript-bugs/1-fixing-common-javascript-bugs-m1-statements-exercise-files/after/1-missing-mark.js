function getNames() {
    var length = 0;
    var names = "";

    ['John', 'Susan', 'Joe'].forEach(function (name, index) {
        length = index + 1;
        names += name + ' ';
    });

    return {
        length: length,
        names: names
    };
}

console.log(getNames());
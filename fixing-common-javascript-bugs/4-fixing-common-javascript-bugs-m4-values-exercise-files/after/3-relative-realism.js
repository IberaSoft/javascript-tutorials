undefined = true;
(function (undefined) {
    var element = document.getElementById("greeting");
    function html(value) {
        if (value === undefined) {
            return element.innerHTML;
        } else if (typeof value === "string") {
            element.innerHTML = value;
        } else if (typeof value === "function") {
            element.innerHTML = value(element.innerHTML);
        }
    }
    alert(html());
    html("Hello");
    alert(html());
    html(function (text) { return text + " World!"; });
    alert(html());
}());
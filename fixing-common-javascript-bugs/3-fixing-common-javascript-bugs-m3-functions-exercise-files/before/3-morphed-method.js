var element = document.getElementById("greeting");

function text() { return element.innerText; }

function text(value) { element.innerText = value; }

function text(callback) {
  element.innerText = callback(element.innerText);
}

text();
text("Hello");
text(function (text) { return text + " World!"; });

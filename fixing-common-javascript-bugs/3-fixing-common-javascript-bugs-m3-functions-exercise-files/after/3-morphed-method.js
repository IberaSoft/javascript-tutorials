var element = document.getElementById("greeting");

function text(value) {
    if (!value) { return element.innerText; } 
    else if (typeof value === "string") {
      element.innerText = value; 
    } else if (typeof value === "function") {
      element.innerText = value(element.innerText);        
    }
}

text(); 
text("Hello"); 
text(function (text) { return text + " World!"; });

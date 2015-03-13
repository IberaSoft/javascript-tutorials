var ul = document.querySelector("ul"), i, li;
for (i = 0; i < 10; i++) {
  li = document.createElement("li");
  li.innerHTML = "Link " + i;
  li.addEventListener("click", (function (index) {
    return function () {
      console.log("You've clicked " + index);
    };
  }(i)), false);
  ul.appendChild(li);
}

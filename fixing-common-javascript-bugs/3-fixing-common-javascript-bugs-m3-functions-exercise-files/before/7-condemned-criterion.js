﻿(function() {
  "use strict";

  var min = 0, max = 100, random =
        Math.floor(Math.random() * (max - min + 1) + min);

  console.log("Random Number: " + random);

  setTimeout(arguments.callee, 5000);
}());


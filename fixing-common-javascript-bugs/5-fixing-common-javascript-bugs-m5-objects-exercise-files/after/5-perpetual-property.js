(function () {
  "use strict";

  Object.defineProperty(window, "MEANING_OF_LIFE", {
    writable: false,
    value: 42
  });

  console.log(window.MEANING_OF_LIFE);
  window.MEANING_OF_LIFE = 24;
  console.log(window.MEANING_OF_LIFE);
}());


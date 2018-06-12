"use strict";

module.exports = function (str) {
  if (Object.prototype.toString.call(str) === "[object String]") {
    return str.match(/data:(.*;)?(.*)?,(.*)/m)[3];
  }
  return "";
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl1.question('Input Any Number you like:', function (numm1) {
    var no1 = parseInt(numm1);
    for (var i = 1; i < 11; i++) {
        console.log("".concat(no1, " X ").concat(i, " = ").concat(no1 * i));
    }
    rl1.close();
});

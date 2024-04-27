"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Guess Any Number");
console.log("\n Add equal amount of your friend");
rl1.question('ADD 10 from mine :', function (numm1) {
    var no1 = parseInt(numm1);
    console.log("\n Give half amount to beggar");
    console.log("\n Return your friend amount");
    console.log("\n answer is 5");
    rl1.close();
});

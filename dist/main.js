"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
function hello(compiler) {
    console.log("Hello from ".concat(compiler));
}
hello("TypeScript");
console.log((0, hello_1.sayHi)("TypeScript"));

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHi = void 0;
function sayHi(name) {
    return "Hi from ".concat(name);
}
exports.sayHi = sayHi;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hello_1 = require("./hello");
function hello(compiler) {
    console.log("Hello from ".concat(compiler));
}
function showHello(divName, name) {
    var element = document.getElementById(divName);
    element.innerHTML = (0, hello_1.sayHi)(name);
}
hello("TypeScript");
console.log((0, hello_1.sayHi)("TypeScript"));
showHello("greeting", "TypeScript");

},{"./hello":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaGVsbG8udHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBLFNBQWdCLEtBQUssQ0FBQyxJQUFZO0lBQ2pDLE9BQU8sa0JBQVcsSUFBSSxDQUFFLENBQUM7QUFDMUIsQ0FBQztBQUZELHNCQUVDOzs7OztBQ0ZELGlDQUErQjtBQUUvQixTQUFTLEtBQUssQ0FBQyxRQUFnQjtJQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFjLFFBQVEsQ0FBRSxDQUFDLENBQUE7QUFDekMsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLE9BQWUsRUFBRSxJQUFZO0lBQzVDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDaEQsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFBLGFBQUssRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBR0QsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBQSxhQUFLLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUNqQyxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhpKG5hbWU6IHN0cmluZykge1xuIHJldHVybiBgSGkgZnJvbSAke25hbWV9YDtcbn0iLCJpbXBvcnQgeyBzYXlIaSB9IGZyb20gXCIuL2hlbGxvXCJcblxuZnVuY3Rpb24gaGVsbG8oY29tcGlsZXI6IHN0cmluZyl7XG4gICAgY29uc29sZS5sb2coYEhlbGxvIGZyb20gJHtjb21waWxlcn1gKVxufVxuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2TmFtZSlcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IHNheUhpKG5hbWUpO1xufVxuXG5cbmhlbGxvKFwiVHlwZVNjcmlwdFwiKTtcbmNvbnNvbGUubG9nKHNheUhpKFwiVHlwZVNjcmlwdFwiKSk7XG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHRcIik7Il19

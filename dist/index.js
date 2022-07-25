"use strict";
// -------- Basic Types -------- //
let id = 5;
let company = "Tito Muto";
let isPublished = true;
let x = 'Hello'; // any datatype
// initialize
let age;
age = 20;
// -------- Array -------- //
let ids = [1, 2, 3, 4, 5];
let xArr = [1, 2.3, 'hello', true, false];
// ids.push('Hello'); // will not work because it supposed to contain only numbers.
ids.push(2002);
for (var i = 0; i < ids.length; i++) {
    console.log(ids[i]);
}
// -------- Tuples -------- //
// Tuple
let person = [1, 'Tito', true];
// Tuple Array: Array of tuples
let employee;
employee = [
    [1, 'Tito'],
    [2, 'Muto'],
    [3, 'Aratema']
];
// -------- Unions -------- //
// if you want one particular variable to hold one than one type
// e.g ID can be number or string
let productId;
productId = 22;
productId = '22fd';
// -------- Enum -------- //
// to define set of named constant
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.Left);
// -------- Objects -------- //

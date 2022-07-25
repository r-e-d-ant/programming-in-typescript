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
const user1 = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 1,
    name: 'John'
};
// -------- Type Assertion -------- //
// Trick entity as a different types
let cid = 5;
let customerId = cid; // set cid to customerId but with a different type;
// or
let customerId1 = cid;
console.log(customerId);
// -------- Functions -------- //
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
// if there's no return value
function log(message) {
    console.log(message);
}
log("Hello, World!");
log(2002);
const user3 = {
    id: 1,
    name: 'John'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(2, 2));
console.log(sub(2022, 2002));
// -------- Classes -------- //
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const tito = new Person(24300, 'Tito');
const muto = new Person(24108, 'Muto');
// tito.id = 200; // invalid because 'id' is set to private
// console.log(tito.id); // invalid because 'id' is set to private
console.log(tito, muto);
console.log(tito.register());
class Person1 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const satb = new Person(24300, 'Sat-B');
const fizzo = new Person(24108, 'Big Fizzo');
// exteding our person class
// Subclasses
class Employee extends Person1 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Big Fizzo', 'Singer');
console.log(emp.name);
console.log(emp.register());
// -------- Generics -------- //
// it allow us to create reusable components and use placeholder and we can replace them with any datatype we want
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['a', 'b', 'c', 'd', 'e']);

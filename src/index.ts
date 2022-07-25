
// -------- Basic Types -------- //
let id: number = 5;
let company: string = "Tito Muto";
let isPublished: boolean = true;
let x: any = 'Hello';  // any datatype

// initialize
let age: number;
age = 20;

// -------- Array -------- //
let ids: number[] = [1,2,3,4,5];
let xArr: any[] = [1, 2.3, 'hello', true, false];

// ids.push('Hello'); // will not work because it supposed to contain only numbers.
ids.push(2002);

for(var i: number = 0; i < ids.length; i++) {
    console.log(ids[i]);
}

// -------- Tuples -------- //
// Tuple
let person: [number, string, boolean] = [1, 'Tito', true];
// Tuple Array: Array of tuples
let employee: [number, string][];

employee = [
    [1, 'Tito'],
    [2, 'Muto'],
    [3, 'Aratema']
]

// -------- Unions -------- //
// if you want one particular variable to hold one than one type
// e.g ID can be number or string
let productId: string | number;
productId = 22;
productId = '22fd';

// -------- Enum -------- //
// to define set of named constant
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}
enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}
console.log(Direction2.Left);

// -------- Objects -------- //
const user1: {
    id: number,
    name: string
} = {
    id: 1,
    name: 'John'
}

// or

type User = {
    id: number,
    name: String
}

const user2: User = {
    id: 1,
    name: 'John'
}

// -------- Type Assertion -------- //
// Trick entity as a different types
let cid: any = 5;
let customerId = <number>cid; // set cid to customerId but with a different type;
// or
let customerId1 = cid as number;
console.log(customerId);

// -------- Functions -------- //
function addNum(x: number, y: number): number {
    return x + y;
}

console.log(addNum(1, 2));

// if there's no return value
function log(message: string | number): void {
    console.log(message);
}
log("Hello, World!");
log(2002);

// -------- Interfaces -------- //
// ! you can't do unions in when using Interfaces instead of type
/*
• valid
type id = number | string;
const id1: id = 1;

• invalid
interface id = number | string;
const id1: id = 1;
*/
// it's kind like custom type or a specif structure to an object or a function
interface UserInterface {
    readonly id: number // read only property 
    name: String
    age?: number // age property is optional
}

const user3: UserInterface = {
    id: 1,
    name: 'John'
}

// user3.id = 5; // will not work because it's ready only prop.

// -------- Interfaces with Functions //
interface MathFunc {
    (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

console.log(add(2, 2));
console.log(sub(2022, 2002));

// -------- Classes -------- //
class Person {
    // private mean you should only access this property within the class. or class which extended from this class (private/protected)
    private id: number
    name: string

    constructor(id: number, name: string) {
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

// -------- Classess with Interfaces //
interface PersonInterface {
    id: number // read only property 
    name: String
    register(): string
}

class Person1 implements PersonInterface {
    // private mean you should only access this property within the class. or class which extended from this class (private/protected)
    id: number
    name: string

    constructor(id: number, name: string) {
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
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, 'Big Fizzo', 'Singer');
console.log(emp.name);
console.log(emp.register());

// -------- Generics -------- //
// it allow us to create reusable components and use placeholder and we can replace them with any datatype we want

function getArray<T>(items: T[]): T[] { // T as a place holder
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4,5]);
let strArray = getArray<string>(['a','b','c','d','e']);
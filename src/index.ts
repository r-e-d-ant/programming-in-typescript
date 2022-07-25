
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

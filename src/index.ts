
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

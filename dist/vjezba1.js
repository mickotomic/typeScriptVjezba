"use strict";
console.log('log');
//let ime: string = "Milorad";
let ime1;
ime1 = true;
ime1 = "100";
console.log(ime1);
//let a: unknown = 100;
//a = '100' as string;
//let x: never;
//x = 'something';
//console.log(a);
const arr = ["1", "2", "3"];
console.log(arr);
let personData;
personData = ["Milorad", 30, true];
console.log(personData);
const person = { name: "John", age: 30, occupation: "student" };
console.log(person);
const person2 = { name: "Bane", age: 30 };
console.log(person2);
const rectangle = { height: 30, width: 50 };
console.log(rectangle);
// let myVar: string | number;
// myVar = "Micko";
// //myVar.toUpperCase();
// //console.log(myVar);
// if (typeof myVar === "string") {
//     console.log(myVar.toUpperCase().split("").join("^"));
// }
// // if (typeof myVar === "number") {
// //     console.log(myVar.toFixed(2));
// //  }
let myVar;
myVar = 4;
if (typeof myVar === "number") {
    console.log(myVar.toFixed(2));
}
myVar = "Test";
if (typeof myVar === "string") {
    console.log(myVar.toLocaleUpperCase());
}
function getData() {
    const artists = { artists: [{ name: "Micko" }, { name: "Miroslav" }] };
    const err = {
        success: false,
        error: { message: "Doslo je do greske" }
    };
    if (err) {
        return err;
    }
    return artists;
}
console.log(getData());
function multiply(first, second) {
    return first.concat(second);
}
console.log(multiply("MICKO", " TOMIC").split("").join("&"));
function multiply2(first, second) {
    return first * second;
}
console.log(multiply2(6, 7));

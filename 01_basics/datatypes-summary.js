/* How data is kept in memory and how it is accessed on that charaterization we have 2 type of data types
    a.Primitive(Call by value) - String, Number, Boolean, null, undefined, Symbol, BigInt
    b.Non-Primitive(Reference type). - Array, Objects, Functions
*/

// Javascript is Dynamically typed language because we dont have to specify variables datatype (int, string, boolean etc).

const score = "100"; 
console.log(typeof score); // String

const scoreResult = 100; 
console.log(typeof scoreResult); // Number

const isLoggedIn = false;
console.log(typeof isLoggedIn); // Boolean

const outsideTemp = null;
console.log(typeof outsideTemp); // null/object

let userEmail;
console.log(typeof userEmail); // Undefined

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(typeof id); // symbol
console.log(id == anotherId); // false

const bigNumber = 3456543576654356754n; // bigInt
console.log(typeof bigNumber);

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "suraj",
    age: 30,
}

const myFunction = function(){
    console.log("Hello World");
}

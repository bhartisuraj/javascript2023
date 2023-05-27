let score = "33abc";

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// example is of output we get when we convert following thing to Number.
// "33" => 33
// "33abc" => NaN(Not a number but type of NaN is number)
// true => 1; false => 0;

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// example is of output we get when we convert following thing to boolean.
// 1 => true; 0 => false;
// "" => false;
// "suraj" => true;

let someNumber = 33;
let stringNumber = String(someNumber);

console.log(stringNumber);
console.log(typeof stringNumber);
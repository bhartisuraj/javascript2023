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

// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************************Operations***************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello";
let str2 = " suraj";

let str3 = str1+ str2;

// console.log(str3);
// console.log(str1 +" " + str2);

console.log("1" + 2); // One value was string so o/p was 12
console.log(1 + "2"); // One value was string so o/p was 12
console.log(1 + 2 +"2"); // Here js added first and second value and printed third value as it is
console.log(1 + "2" + 2); // Here js printed first, second and third value as it is.
console.log("1" + 2 + 2); // Here js printed first, second and third value as it is.

const name = "suraj";
const repoCount = 50;

console.log(name + repoCount + " Value");
console.log(
  `Hello, my name is ${name}${name.toUpperCase()} and my repo count is ${repoCount}`
);

const gameName = new String("suraj-sb");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("r"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   suraj    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suraj.com/suraj%20bharti";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));

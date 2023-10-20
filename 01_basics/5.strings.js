const name = "saksham ";
const repoCount = 50;

// console.log(name + repoCount + " Value");
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("saksham-v-chauhan");
// console.log(gameName[0]); 
// used for key value pairs

// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase()); 
// used for uppercase

// console.log(gameName.length);
// used for length of the string 

// console.log(gameName.charAt(2)); 
// tells us about the which character is at a specific index

// console.log(gameName.indexOf('v')); 
// tells us about the index of the character


// important string methods

// in substring upper limit is excluded
const newString = gameName.substring(0, 9);
console.log(newString);

const anotherString = gameName.slice(-5, -1);
console.log(anotherString);

const newStringOne = "     saksham   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saksham.com/saksham%20chauhan";

console.log(url.replace('%20','-'));
console.log(url.includes("saksham"));
console.log(url.includes("coding"));

console.log(gameName.split('-'));
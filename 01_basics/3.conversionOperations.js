let score = "Saksham";

// console.log(typeof score); // it is as a variable
// console.log(typeof (score)); // it is used as a method

let valueInNumber = Number(score);
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN (not a number)
// true => 1
// false => 0

let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// 1 => true; 0=> false
// " " => false
// "anything written" => true

let someNumber = 33;
let stringNumber = String(someNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber);

// *************************************** Operations ***************************************

let value = 3;
let negValue = -value;
// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "hello ";
let str2 = "saksham";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); it is converted to number and then value is increased

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
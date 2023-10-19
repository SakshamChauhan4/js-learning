// Primitive 

// 7 types : STring, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id == anotherId);

const bigNumber = 4873847583593587375738587384758937535739853n;

// JS is a dynamically typed language unlike typescript which is is statically typed language
// In dynamically typed languages all type checks are performed in a runtime, only when your program is executing. So this means you can just assign anything you want to the variable and it will work. 

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Ironman","Superman","Batman"];

//objects
let myObj = {
  name: "saksham",
  age: 22,
}
const myFunction = function(){
  console.log("hello world");
}

 // +++++++++++++++++++++++++++++++++++++++
 

 // Stack (Primitive) (call by value), Heap (Non-Primitive) (call by reference)
 
let myYoutubename = "SakshamChauhan";

let anotherName = myYoutubename
anotherName = "Coding";

// console.log(myYoutubename);
// console.log(anotherName);

let userOne = {
  email: "user@gmail.com",
  upi : "user@upi",
}

let userTwo = userOne;
userTwo.email = "usertwo@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
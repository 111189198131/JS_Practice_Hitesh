let score = "20abc";

let valueNumber = Number(score);
//console.table([typeof score, typeof valueNumber,valueNumber]);
 
//let isLoggedIn = 1;
let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false, "xyz" => true
let someNumber = 33;
let stringFromNumber = String(someNumber);
console.table([someNumber,stringFromNumber, typeof stringFromNumber]);
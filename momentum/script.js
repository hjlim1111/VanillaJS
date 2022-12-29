// 조건문
//conditional
/*
const age = prompt("How old are you?");

console.log(age, parseInt(age));
*/

// string -> number로 변환하는 법 => parseInt
/*
const age2 = parseInt(prompt("How old are you?"));
console.log(age2);
*/

//if 조건문(condition)
const age3 = parseInt(prompt("How old are you?"));
console.log(isNaN(age3));

/*
// condition 안에는 boolean만 들어올 수 있음. true or false
if (condition) {
  /// condition === true
} else {
  /// condition === false
}
*/

// 조건문 if else
/*
if (isNaN(age3)) {
  console.log("Please write a number");
} else {
  console.log("Thank you for writing your age.");
}
*/

// 조건문 else if
// AND OR 연산자
if (isNaN(age3) || age3 < 0) {
  console.log("Please write a real positive number");
} else if (age3 < 18) {
  console.log("You are too young.");
} else if (age3 >= 18 && age3 <= 50) {
  console.log("You can drink");
} else if (age3 > 50 && age3 <= 80) {
  console.log("You should exercise");
} else if (age3 === 100) {
  console.log("wow you are wise");
} else if (age3 > 80) {
  console.log("You can do whatever you want.");
}
/*
true || true === true
false || true === true
true || false === true
false || false === false

true && true === true
false && true === false
true && false === false
false && false === false
*/

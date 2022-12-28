// function
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Nico", 10);
sayHello("Dal", 23);
sayHello("Yeto", 36);

// 다른 예제
function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}
plus(13, 24);
function divide(a, b) {
  console.log(a / b);
}
divide(20, 4);

// object 안 function
const player = {
  name: "nico",
  sayHi: function (otherPersonName) {
    console.log("Hi " + otherPersonName + " nice to meet you!");
  },
};
console.log(player.name);
player.sayHi("lynn");
player.sayHi("gywjd");

// 다른 예제
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
};
const addResult = calculator.add(2, 3);

const subtractResult = calculator.subtract(addResult, 10);

const multiplyResult = calculator.multiply(10, subtractResult);

const divideResult = calculator.divide(multiplyResult, addResult);

const powerOfResult = calculator.powerOf(divideResult, subtractResult);

console.log(calculator.add(5, 1));
/*
익명함수 예시 3가지

object 내 value로 함수 할당
const a = {
  add: function(a,b){
    console.log();
  }
}

변수에 함수 할당
const a = function() {}
a();

즉시실행
(function() {console.log(1)})();
*/

// function return
// return => 결과값을 내보내고 싶을 때
// 무언가를 return하게 된다면 계산을 담당하는 function의 코드는 function이 return하는 값과 같아짐
// return을 하게 된다면 return하는 순간 function을 종료함
const age = 96;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

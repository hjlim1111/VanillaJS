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
    console.log(a + b);
  },
  subtract: function (a, b) {
    console.log(a - b);
  },
  multiply: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(5, 1);
calculator.subtract(4, 2);
calculator.multiply(5, 2);
calculator.divide(6, 2);
calculator.powerOf(2, 5);

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

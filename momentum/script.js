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

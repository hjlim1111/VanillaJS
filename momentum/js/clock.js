const clock = document.querySelector("h2#clock");

/*
interval : '매번'일어나야 하는 무언가
 ㄴ ex) '매 2초'

setInterval()
 ㄴ 두개의 argument를 받음.
 첫번째 argument는 실핼하고자 하는 function
 두번째 argument는 호출되는 function 간격을 몇 ms로 할 지 쓰면 됨
 1000ms = 1s(초)
*/

function sayHello() {
  console.log("Hello");
}

setInterval(sayHello, 5000);

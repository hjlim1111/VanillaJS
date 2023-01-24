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
//setInterval(sayHello, 5000);

/*
timeout : 일정시간이 흐른 뒤 실행되는 법
 ㄴ ex) '5초 뒤'

setTimeout()
호출하고자 하는 function, 얼마나 기다릴지 ms단위 입력
*/
//setTimeout(sayHello, 5000);

function sayHello() {
  console.log("Hello");
}

/*
const date = new Date(); 

date.getDate(); // 며칠
date.getDay(); // 무슨요일
date.getFullYear() // 몇년
date.getHours(); // 몇시
date.getMinutes(); // 몇분
date.getSeconds(); // 몇초
*/

function sayClock() {
  const date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(sayClock, 1000);

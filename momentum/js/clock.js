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

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

sayClock();
setInterval(sayClock, 1000);

/*
1 이 아닌 01 로 표시하고 싶을 때
padStart : 앞에 추가
padEnd : 뒤에 추가
 ㄴ string에 쓸 수 있는 function임

ex)
string.padStart(string의 길이, 추가할 숫자);
"1".padStart(2,"0"); // 결과값 01
"12".padStart(2,"0") // 결과값 12 아무런 변화가 일어나지 않음

"1".padEnd(2,"0") // 결과값 10
*/

/*
new Date().getHours(); //결과값이 number
number에서 string으로 변환하려면?
String으로 감싸주면 됨

String(new Date().getHours());
*/

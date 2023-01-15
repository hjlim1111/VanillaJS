const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//-----------------------------------------------------
const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용
const USERNAME_KEY = "username";
/*
localStorage로 설정값을 준 key name 인 username이 반복되고 있다.
string이 반복적으로 사용되고, 절대로 그 이름이 틀리지 않아야 하는 경우에는 변수로 담아서 저장하기
그 이유는 string이 틀리면 js는 오류를 잡아내지 못하지만 변수명으로 담았을 때 틀리면 오류를 잡아낼 수 있기 때문
*/
//-----------------------------------------------------

function onLoginSubmit(event) {
  // event object를 argument로 줌
  event.preventDefault(); // 어떤 event의 기본 행동(브라우저가 기본적으로 수행하는 동작)이든 발생되지 않도록 막는 function
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);
  // 앞 key는 저장될 아이템의 이름, 뒤 value는 변수이름이다

  paintGreetings(userName);
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

// 배운 내용
/*
greeting.innerHTML = `Hello ${userName}`
greeting.innerHTML = "Hello " + userName; 위와 동일한 코드
'' 와 "" 이 아닌 ``(백틱)을 사용해야 함
변수와 string을 결합하고 싶다면 또는 변수를 string안에 넣고 싶다면 ${변수명} 이렇게 표현하면 됨

localstorage : 새로고침해도 입력받은 혹은 저장한 값이 유지되게 하는 것

localStorage.setItem("이름(Key)","저장할 내용(Value)") : 값을 저장하는 법
localStorage.getItem("이름(Key)") : 값을 불러오는 법
localStorage.removeItem("이름(Key)") : 저장한 값을 지우는 법

// 1.15 --------------------------
사용자가 이름을 입력해서 localstorage에 값이 담기게 되면 사용자 이름이 새로고침해도 보이게, (원래는 새로고침을 하면 무조건 다시 form 영역이 나타났었음)
하지만 사용자 이름을 입력하지 않으면 form이 나타나게

paintGreetings 함수를 만들어서 코드를 리팩토링
*/

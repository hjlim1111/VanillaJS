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

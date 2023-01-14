const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용

function onLoginSubmit(event) {
  // event object를 argument로 줌
  event.preventDefault(); // 어떤 event의 기본 행동(브라우저가 기본적으로 수행하는 동작)이든 발생되지 않도록 막는 function
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;

  localStorage.setItem("username", userName);
  // 앞 key는 저장될 아이템의 이름, 뒤 value는 변수이름이다

  greeting.innerHTML = `Hello ${userName}`;
  // greeting.innerHTML = "Hello " + userName; 위와 동일한 코드
  // '' 와 "" 이 아닌 ``(백틱)을 사용해야 함
  // 변수와 string을 결합하고 싶다면 또는 변수를 string안에 넣고 싶다면 ${변수명} 이렇게 표현하면 됨

  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

// 배운 내용
/*
localstorage : 새로고침해도 입력받은 혹은 저장한 값이 유지되게 하는 것

localStorage.setItem("이름(Key)","저장할 내용(Value)") : 값을 저장하는 법
localStorage.getItem("이름(Key)") : 값을 불러오는 법
localStorage.removeItem("이름(Key)") : 저장한 값을 지우는 법
*/

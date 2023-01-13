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

  greeting.innerHTML = `Hello ${userName}`;
  // greeting.innerHTML = "Hello " + userName; 위와 동일한 코드
  // '' 와 "" 이 아닌 ``(백틱)을 사용해야 함
  // 변수와 string을 결합하고 싶다면 또는 변수를 string안에 넣고 싶다면 ${변수명} 이렇게 표현하면 됨

  greeting.classList.remove(HIDDEN_CLASSNAME);
}
loginForm.addEventListener("submit", onLoginSubmit);

// 배운 내용
// 백틱을 사용하여 변수와 string 결합 방법 새로운 방법을 알게 됨 ``, ${변수명} 규칙이 있음
// class hidden을 사용하여 input을 숨겼다가 h1을 보이게 하는 방법 등을 할 수 있음

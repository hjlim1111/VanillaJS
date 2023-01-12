const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  // event object를 argument로 줌
  event.preventDefault(); // 어떤 event의 기본 행동(브라우저가 기본적으로 수행하는 동작)이든 발생되지 않도록 막는 function
  //const userName = loginInput.value;
  console.log(event);
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

// 배운내용 정리
// 브라우저 기본 동작을 멈추고, js가 정보를 담은 채로 funtion 호출함(event object를 담은 정보)

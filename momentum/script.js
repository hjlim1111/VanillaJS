const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  // event object를 argument로 줌
  event.preventDefault(); // 어떤 event의 기본 행동(브라우저가 기본적으로 수행하는 동작)이든 발생되지 않도록 막는 function
  //const userName = loginInput.value;
  //console.log(event);
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

// 뭐가 클릭됐는지 어디가 클릭됐는지 정보를 알고 싶을 때 js는 단순히 함수를 실행시키기만 하는 것이 아니라
// js는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어줌
//handleLinkClick({information about the event that just happend});
// 이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있음
// 방금 일어난 event에 대한 정보를 담은 이 object는 handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어지게 됨

// 배운 내용 정리
// 브라우저는 링크를 클릭할 때 해당 사이트로 이동하도록 설정이 되어있는데 그 기본 동작을 막음
// EventListener 안에 있는 함수는 내가 직접 실행하지 않고 브라우저가 해줌.
// 브라우저는 실행만 해주는 것이 아니라 event에 대한 정보도 담아줌.
// 우리는 자리만 만들어주면 되고, 이 정보안에는 몇가지 함수도 같이 들어있음
// ㄴ ex) preventDefault 이 함수를 호출하게 되면 event(라는 이름의 argument)는 멈추게 되고 아무것도 진행하지 않음

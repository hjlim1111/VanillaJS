const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

// 위와 동일한데 다른 코드
/*
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/

function onLoginButtonClick() {
  const userName = loginInput.value;
  /*
  if (userName === "") {
    alert("Please write your name");
  } else if (userName.length > 15) {
    alert("Your name is too long");
  }
  */
  console.log(userName);
}
loginButton.addEventListener("click", onLoginButtonClick);

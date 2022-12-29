// element를 더 자세히 보여주는 console.dir()
// console.dir(title);

/* 많이 사용하지는 않지만 id를 가져오는 방법
const title = document.getElementById("title");

title.innerText = "Got you";

//console.log(title.id);
//console.log(title.className);

 */

/* class로 가져오는 방법 */
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

const title = document.getElementsByTagName("h1");
// Tag로 element를 가지고 올 수 있다. tag는 anchor, div, section, button을 의미

/* 가장 멋진 방법 */
//querySelector, querySelectorAll
// 가장 첫번째만 불러옴 (동일 조건으로 값이 있어도), 여러가지를 가지고 오고 싶으면 querySelectorAll사용하기
const title2 = document.querySelector(".hello h1");

title2.innerText = "wow";
title2.style.color = "red";

function handleTitleClick() {
  console.log("title was clicked!");
}
title2.addEventListener("click", handleTitleClick);

function handleMouseEnter() {
  title2.innerText = "Mouse is here!";
}
title2.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave() {
  title2.innerText = "Mouse is gone!";
}
title2.addEventListener("mouseleave", handleMouseLeave);

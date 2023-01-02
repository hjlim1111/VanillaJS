const test = document.querySelector(".hello h1");

console.dir(test);
// dir - 자세한 내용을 더 볼 수 있음
// 사용가능한 event를 확인할 수 있음
// property 이름 앞에 on이 붙여져있으면 event listener임

//html element
// 클릭이 발생했을 때 - click
function handleTitleClick() {
  test.style.color = "blue";
}
test.addEventListener("click", handleTitleClick);

// 마우스가 위에 위치할 때 - mouseenter
function handleMouseEnter() {
  test.style.color = "green";
}
test.addEventListener("mouseenter", handleMouseEnter);

// 마우스가 떠나갔을 때 - mouseleave
function handleMouseLeave() {
  test.style.color = "purple";
}
test.addEventListener("mouseleave", handleMouseLeave);

// 지금까지 위에 사용했던  test(변수)는 html element임

// window
// 화면 크기가 변경될 때 - resize
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
  // document - 화면에 접근
  // document.body document.title, document.head 이런 식으로 접근 가능하지만
  // document.h1, document.div 이렇게 접근 불가능 => querySelector으로 접근해야 함
}
window.addEventListener("resize", handleWindowResize);

// 화면에서 copy가 감지되었을 때 - copy
function handleWindowCopy() {
  alert("copier");
}
window.addEventListener("copy", handleWindowCopy);

// 화면에 wifi 연결 상태인지
function handleWindowOnline() {
  alert("ALL GOOOD");
}
window.addEventListener("online", handleWindowOnline);

// 화면에 wifi 연결이 끊어진 상태인지
function handleWindowOffline() {
  alert("SOS no WIFI");
}
window.addEventListener("offline", handleWindowOffline);

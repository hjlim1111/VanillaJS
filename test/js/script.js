const test = document.querySelector("div.hello h1");

function handleTitleClick() {
  test.classList.toggle("active");
  /*
  위 코드와 아래 코드는 아예 동일한 역할을 하는 코드
  아래 코드와 toggle이 하는 역할이 동일.
  toggle을 사용하면 더 간단한 코드를 구현할 수 있음
  const clickedClass = "active";
  if (test.classList.contains(clickedClass)) {
    test.classList.remove(clickedClass);
  } else {
    test.classList.add(clickedClass);
  }
  */
}

test.addEventListener("click", handleTitleClick);

/*
classList - class들의 목록으로 작업을 할 수 있게끔 해줌
className - 모든 것을 교체. 이전 class들은 상관하지 않고

classList.contains :내가 명시한 class가 html element의 class에 포함되어 있는지 말해줌
*/

const test = document.querySelector("div.hello h1");

function handleTitleClick() {
  const clickedClass = "active";
  if (test.className === clickedClass) {
    test.className = "";
  } else {
    test.className = clickedClass;
  }
}

test.addEventListener("click", handleTitleClick);

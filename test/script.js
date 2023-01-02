const test = document.querySelector("div.hello h1");

function handleTitleClick() {
  if (test.style.color === "blue") {
    test.style.color = "tomato";
  } else {
    test.style.color = "blue";
  }
}

test.addEventListener("click", handleTitleClick);

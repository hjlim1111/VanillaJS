const test = document.querySelector("div.hello h1");

function handleTitleClick() {
  const currentColor = test.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  test.style.color = newColor;
}

test.addEventListener("click", handleTitleClick);

const onEvent = document.querySelector(".event h1");

function handleMouseEnter() {
  onEvent.innerText = "Mouse is here!";
  onEvent.style.color = "blue";
}
onEvent.addEventListener("mouseenter", handleMouseEnter);

function handleMouseLeave() {
  onEvent.innerText = "Mouse is gone!";
  onEvent.style.color = "red";
}
onEvent.addEventListener("mouseleave", handleMouseLeave);

function handleWindowResize() {
  onEvent.innerText = "You just resized";
  onEvent.style.color = "purple";
}
window.addEventListener("resize", handleWindowResize);

function handleWindowRightClick() {
  onEvent.innerText = "That was a right cLick";
  onEvent.style.color = "yellow";
}
window.addEventListener("contextmenu", handleWindowRightClick);

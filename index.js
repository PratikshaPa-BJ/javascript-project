const yellowdiv = document.querySelector("#yellowDiv");
const countText = document.querySelector("#count");
const resetButton = document.querySelector("#resetBtn");
const themeButton = document.querySelector("#themeBtn");

let count = 0;

const colors = ["red", "blue", "green", "purple", "orange", "deeppink"];
const words = ["HI", "Hello", "welcome", "Javascript", "DOM", "Hover"];

yellowdiv.addEventListener("mouseover", function (e) {
  count++;
  countText.innerText = count;

  const span = document.createElement("span");

  const randomWord = words[Math.floor(Math.random() * words.length)];
  span.innerText = randomWord;

  span.classList.add("hi-text");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  span.style.color = randomColor;

  const randomSize = Math.floor(Math.random() * 30) + 20;
  span.style.fontSize = randomSize + "px";

  span.style.left = e.offsetX + "px";
  span.style.top = e.offsetY + "px";

  yellowdiv.appendChild(span);

  setTimeout(function () {
    span.remove();
  }, 2000);
});
resetButton.addEventListener("click", function () {
  yellowdiv.innerHTML = "";
  count = 0;
  countText.innerText = count;
});

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeButton.innerText = "Light Mode";
  } else {
    themeButton.innerText = "Dark Mode";
  }
});

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let bgRef;
let Tdelay = 1000;

const randomColour = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let position = Math.floor(Math.random() * 16);
    color += hex[position];
  }
  return color;
};
function bgChange() {
  let bgColor = randomColour();
  document.body.style.backgroundColor = bgColor;
  document.querySelector("#colorCode").innerText = "COLOR: " + bgColor;

  start.disabled = true;
  stop.disabled = false;
}
const startEvent = function () {
  if (!bgRef) {
    bgRef = setInterval(bgChange, Tdelay);
  }
};

const stopEvent = function () {
  clearInterval(bgRef);
  bgRef = null;

  start.disabled = false;
  stop.disabled = true;
};

document.querySelector("#delay").addEventListener("input", (e) => {
  Tdelay = e.target.value;
  document.querySelector("#delayVal").innerText = Tdelay;
  if (bgRef) {
    clearInterval(bgRef);
    bgRef = setInterval(bgChange, Tdelay);
  }
});

start.addEventListener("click", startEvent);
stop.addEventListener("click", stopEvent);

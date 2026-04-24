let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let clock = document.querySelector("#clock");

let eventRef;
let startEvent = function () {
  if (!eventRef) {
    eventRef = setInterval(changeTime, 1000);
  }
  function changeTime() {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString();
  }
  start.disabled = true;
  stop.disabled = false;
};

let stopEvent = function () {
  clearInterval(eventRef);
  eventRef = null;

  stop.disabled = true;
  start.disabled = false;
};

start.addEventListener("click", startEvent);
stop.addEventListener("click", stopEvent);

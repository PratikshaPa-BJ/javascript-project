const output = document.getElementById("output");

function printMessage(message) {
  let div = document.createElement("div");
  div.classList.add("log");
  div.textContent = message;
  output.appendChild(div);
}
document.getElementById("btn").addEventListener("click", () => {
  output.innerHTML = "";
  
  printMessage("START");

  setTimeout(() => printMessage("Timeout Macrotask Executed"), 0);

  Promise.resolve().then(() => printMessage("Promise Microtask Executed"));

  printMessage("END");

  // printMessage("Continue");
});

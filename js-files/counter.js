let value = document.querySelectorAll(".info-title");
let interval = 2;

value.forEach((valueDisplay) => {
  let startValue = 0;
  let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endvalue);
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endvalue) {
      clearInterval(counter);
    }
  }, duration);
});

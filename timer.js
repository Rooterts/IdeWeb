// Prompt
const timerWrapper = document.getElementById("timer-wrapper");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const texts = Array.from(document.getElementsByClassName("text"));
// Buttons
const buttonsWrapper = document.getElementById("buttons-wrapper");
const playPause = document.getElementById("play-pause");
const stopButton = document.getElementById("stop");
const config = document.getElementById("config");
// Show buttons on timerWrapper hover
const showHideElements = [timerWrapper, buttonsWrapper];
for (const el of showHideElements) {
  el.addEventListener("mouseenter", () => buttonsWrapper.classList.add("show"));
  el.addEventListener("mouseleave", () =>
    buttonsWrapper.classList.remove("show")
  );
}

// Disable Texts
const disableTexts = () =>
  texts.forEach((element) => element.setAttribute("readonly", true));
const enableTexts = () =>
  texts.forEach((element) => element.removeAttribute("readonly"));

const ONE_SECOND = 1000;
let initialSeconds = 60 * 60;
let remainingSeconds = initialSeconds;
let interval;
//Update View
const updateView = () => {
  let time = new Date(remainingSeconds * ONE_SECOND);
  minutes.textContent = time.getMinutes().toString().padStart(2, "0");
  seconds.textContent = time.getSeconds().toString().padStart(2, "0");
};
// Get User Config
const getUserConfig = () => {
  initialSeconds = prompt("Set your time in minutes: ") * 60;
  remainingSeconds = initialSeconds;
  updateView();
};
config.addEventListener("click", getUserConfig);
// Timer Functions
const startPauseTimer = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
    disableTexts();
  } else {
    enableTexts();
    interval = setInterval(() => {
      remainingSeconds--;

      if (remainingSeconds === 0) {
        disableTexts();
        stopTimer();
      }

      updateView();
    }, ONE_SECOND);
  }
};

const stopTimer = () => {
  clearInterval(interval);
  interval = null;
  minutes.textContent = "00";
  seconds.textContent = "00";
  initialSeconds = 60 * 60;
  remainingSeconds = initialSeconds;
};

// Adding Events
playPause.addEventListener("click", () => {
  startPauseTimer();
});
stopButton.addEventListener("click", stopTimer);

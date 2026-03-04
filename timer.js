// ============================================================
// State variables
// These hold the "memory" of our timer between function calls.
// We use `let` (not `const`) because their values will change.
// ============================================================
let duration = 30 * 60; // the selected duration in seconds (default: 30 min)
let timeLeft = 30 * 60; // how many seconds are left on the clock
let isRunning = false; // is the timer currently counting down?
let intervalId = null; // stores the ID returned by setInterval so we can stop it

function formatTime(totalSeconds) {
  // TODO: calculate minutes and seconds

  // TODO: update return statement
  // The String() function converts our number value to a string.
  // The padStart() function pads our current string (e.g. minutes) with 0s as needed until we've reached length of 2 (e.g. "5" becomes "05", but "15" stays "15").
  return `${String(_____).padStart(2, "0")}:${String(______).padStart(2, "0")}`;
}

// TODO: Write updateDisplay() function



// TODO: Write updatePlayPauseButton() function
// HINT: to check if a variable is true, simply write the variable name (e.g. if (isRunning) { ... } )
// HINT: You may need to copy paste these symbols: ▶ ⏸


// ============================================================
// PROVIDED FUNCTIONS
// ============================================================
// This is called when a user picks a duration on the page, it'll be used as the onclick handler for the duration buttons
function handleSetDuration(seconds) {
  // Set our variables to reflect the new duration, and start the timer immediately
  duration = seconds;
  timeLeft = seconds;
  isRunning = true;
  updateDisplay(); // update our clock display
  updatePlayPauseButton(); // update the play/pause button to show the correct symbol
  startInterval(); // start the timer
}

// Called by the ▶ / ⏸ button
function toggleRunning() {
  isRunning = !isRunning; // flip the boolean

  // if we're running, start the timer
  if (isRunning) {
    startInterval();
  } else {
    // if we're not running, we should stop the timer by clearing the interval.
    // If we don't clear the interval, the timer will keep ticking down behind the scenes even when we press pause
    clearInterval(intervalId);
  }

  // Update play pause icon to reflect the new state
  updatePlayPauseButton();
}

// Called when the ↺ (reset) button is clicked
function handleReset() {
  clearInterval(intervalId); // stop the timer
  isRunning = false; // update our state variable to reflect that the timer is stopped
  timeLeft = duration; // go back to the previously selected time
  updateDisplay(); // update our time display
  updatePlayPauseButton(); // update play/pause button to show the correct symbol
}

// Starts the countdown interval, which updates the timer every second
// setInterval() will call the provided function every 1000 milliseconds (1 second)
function startInterval() {
  clearInterval(intervalId);

  // setInterval is a JS function that repeatedly calls a function with a fixed time delay between each call.
  // It returns an ID that we can use to stop the interval with clearInterval(). We store this in intervalId.
  // The function () notation is an anonymous function: a function without a name that we define right where we need it
  intervalId = setInterval(function () {
    // This checks if our timer is finished or not.
    if (timeLeft <= 1) {
      clearInterval(intervalId);
      isRunning = false;
      timeLeft = 0;
      updateDisplay();
      updatePlayPauseButton();
      return;
    }
    // Otherwise, we should tick down the timer by 1 second and update the display
    else {
      timeLeft = timeLeft - 1;
      updateDisplay();
    }
  }, 1000);
}

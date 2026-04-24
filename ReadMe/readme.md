## Digital Clock (setInterval & clearInterval Demo)

## Overview

setInterval() repeatedly calls a function or executes a code with a fixed time delay between each call. It continiues untill clearInterval() is called. Here a simple and elegant Digital Clock is built by using HTML, CSS and Javascript, demonstrating the real world use of setInterval() for updating time dynamically every second.

## Features

- Real time Clock updates every second
- Start button to begin the clock
- Stop button to pause the clock
- Button state management (disable/ enable logic) 
- Simple and clean UI
- Displays the current system time in HH:MM:SS format with smooth UI styling

## Demo

- When the Start button is clicked:
   
   - setInterval() starts running every 1000ms (1 second)
   - Current time is fetched using new Date()
   - Time is displayed using toLocaleTimeString()
   - Start button is disabled to prevent multiple intervals 

- When the Stop button is clicked:
    
   - clearInterval() stops the clock
   - Interval reference is cleared
   - Stop button is disabled and Start button is re-enabled


## Tech Stack

- HTML5
- CSS
- Javascript

## Concepts Practiced

- setInterval() : for repeated execution
- clearInterval() : to Stop execution
- DOM Manipulation
- Event listeners
- Basic CSS styling
- Button state control( disabled, enabled)

## Set up Instructions

1.  Clone the Repository:

           git clone <repo-link>

2.  Open the project folder

3.  Run index.html in your browser


##   Future Improvements

- Add Stopwatch feature
- Add Countdown timer


## Author

Pratiksha Parihari

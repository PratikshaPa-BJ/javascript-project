##  ASYNC TASK VISUALISER

## Overview

A simple & interactive web application built with HTML, CSS and Javascript to demonstrate how the Javascript Event Loop works, including the execution order of synchronous code, microtasks(Promises) & macrotasks(setTimeout).

## Objective

This project helps to understand:

- How Javascript handles asynchronous operations
- The role of the Call Stack, Web APIs & Event Loop
- The Difference between Microtask Queue vs Macrotask Queue
- Why Promises execute before setTimeout

## Features

- Run button to trigger async tasks
- Real-time output display
- Demonstrates execution order: - Synchronous code - Microtask - Macrotask
- Clean and Responsive UI
- Scrollable output section for better useability

## Tech Stack

- HTML5
- CSS3
- Javascript

## Concepts Covered

- Javascript Event Loop
- Call Stack
- Web APIs
- Microtask Queue (Promises)
- Macrotask Queue (setTimeout)
- Non-blocking behaviour

## Demo Behavior

When you click the Run Tasks button, the output will be:

```yaml
START
END
Promise Microtask Executed
Timeout Macrotask Executed
```

This Clearly shows that:

- Synchronous code run first
- Microtasks execute before Macrotasks

## Setup Instructions

1.  Clone the Repository:

        git clone <repolink>

2.  Open the project folder

3.  Run index.html in your browser

4.  Click Run button and observe execution order in output

## Author

Pratiksha Parihari

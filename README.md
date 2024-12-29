# Unhandled Promise Rejection in Express.js

This repository demonstrates a common error in Express.js applications where asynchronous operations are not properly handled, leading to server crashes due to unhandled promise rejections.

## Bug
The `bug.js` file shows an Express.js server with an asynchronous operation (`someAsyncOperation`) that might throw an error.  The error handling is insufficient, causing the server to crash if the asynchronous operation fails.

## Solution
The `bugSolution.js` file demonstrates a more robust approach.  It uses a centralized error handler to catch and gracefully handle these unhandled promise rejections.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`. The server will start.  Refresh the page several times until you see a crash.
4. Run `node bugSolution.js`. The server will handle errors gracefully.  Refresh the page multiple times and observe how errors are logged without causing crashes.

## Additional Considerations

-Always handle promise rejections.  The `.catch()` block is crucial for preventing crashes in Node.js applications.
-Consider using a centralized error handler (as shown in the solution) for better maintainability and cleaner error handling across your application.
-Use a process manager (like PM2 or forever) to keep your server running even if errors occur, this will allow you to observe and handle errors in your logs.  This is not a substitute for proper error handling though. 
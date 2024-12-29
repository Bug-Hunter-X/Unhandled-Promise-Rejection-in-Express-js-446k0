const express = require('express');
const app = express();

app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello!');
    })
    .catch(err => {
      console.error('Caught async error:', err);
      res.status(500).send('Something went wrong!');
    });
});

// Centralized error handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Add any additional error handling here, like logging to a file or alerting a monitoring service.
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}
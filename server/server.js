// This is the server for the application //

// I imported express framework to help build my node server.
const express = require('express');

// App constant was created to use the express application for efficient handling of server request and response
const app = express();

// Then I used the get method to setup an API endpoint for the application. This returns a json document back to the client application
app.get('/api', (req, res) => {
  res.json({ users: ['userOne', 'userTwo', 'userThree', 'userFour'] });
});

// The server was set to listen on port 5000
app.listen(5000, () => {
  console.log('Server started on port 5000');
});

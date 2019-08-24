const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

// set up route to middleware that will handle parsing logic
// parse the body of the request that will contain the string of code from the editor

app.post('/run', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

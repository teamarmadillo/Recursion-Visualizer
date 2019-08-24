const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const parserController = require('./controllers/parser');
const PORT = 3000;

// middleware for parsing body of request
const urlencodedParser = bodyParser.urlencoded({ extended: true });

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

// set up route to middleware that will handle parsing logic
// parse the body of the request that will contain the string of code from the editor

app.post(
  '/run',
  urlencodedParser,
  parserController.convertToAST,
  parserController.parseArgsAndBaseCases,
  parserController.convertToRecursiveCallTree,
  (req, res) => {
    // deconstruct recursiveCallTree from res.locals
    // send tree back to client for front-end to parse
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

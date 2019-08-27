const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const parserController = require('./controllers/parser');

app.use(bodyParser.json());
app.use(urlencodedParser);

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

// app.post(
//   '/run',
//   parserController.convertToAST,
//   parserController.parseArgsAndBaseCases,
//   parserController.createState,
//   parserController.convertToRecursiveCallsTree,
//   (req, res) => {
//     console.log('from server, req body: ', req.body.userInput);

//   }
// );

app.post('/run', (req, res) => {
  console.log('from server, req body: ', req.body);
  res.send('/run is hit');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

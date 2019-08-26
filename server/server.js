const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
  next();
});

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') {
  app.use('/build', express.static(path.join(__dirname, '../build')));
}

app.use('/api', (req,res) => {
  console.log('from server, req body: ', req.body.userInput);
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

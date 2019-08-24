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

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});

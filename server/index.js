const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5120;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/:id', express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

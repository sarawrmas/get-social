const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/api'));

mongoose.connect('mongodb://localhost/get-social', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
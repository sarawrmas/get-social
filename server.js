const express = require('express');
const mongoose = erquire('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

mongoose.connect('mongodb://localhost', {
  useFindAndModify: false,
  useNewUrlParser: true,
  userUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Connected on localhose:${PORT}`));
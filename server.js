const express = require('express');

const PORT = 5000;

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the Random Ideas API.',
  });
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter); // middleware setup to route to ideas router

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

const app = express();

// body parser middleware - Express v5 contains bodyParser to extract data from body of api request.
// Separate npm not reqd.
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the Random Ideas API.',
  });
});

// middleware setup to route to ideas router
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

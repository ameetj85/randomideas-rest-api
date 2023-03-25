const express = require('express');

const PORT = 5000;

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Welcome to the Random Ideas API.',
  });
});

app.get('/api/ideas', (req, res) => {
  res.json({
    success: true,
    data: ideas,
  });
});

app.get('/api/ideas/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    res.status(404).json({
      success: false,
      error: 'Resource not found',
    });
  } else {
    res.send({
      success: true,
      data: idea,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

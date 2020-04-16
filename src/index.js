const express = require('express');

const app = express();

app.get('/projecs', (req, res) => {
  return res.json([
    'Project 1',
    'Project 2',
  ]);
});

app.post('/projects', (req, res) => {
  return res.json([
    'Project 1',
    'Project 2',
    'Project 3',
  ]);
});

app.put('/project/:id', (req, res) => {
  return res.json([
    'Project 1',
    'Project 4',
    'Project 3',
  ]);
});

app.delete('/peojects/:id', () => {
  return res.json([
    'Project 4',
    'Project 3',
  ]);
})

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});


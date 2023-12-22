/* eslint-disable max-len */
const express = require('express');

const router = express.Router();

router.get('/Authentifizierung', (request, response) => {
  response.send('Authentifizierung');
});
module.exports = router;
const app = express();
const port = 3001;
// eslint-disable-next-line import/no-extraneous-dependencies
const session = require('express-session');

// Hier lade ich die Express Middleware damit ich an meine Endpunkte in JSON Body senden kann und diese als JavaScript Objekt verfügbar werden
app.use(express.json());

app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));

let tasks = [
  { id: '01', title: 'Zimmer staubsaugen' },
  { id: '02', title: 'Wäsche machen' },
  { id: '03', title: 'Bad abstauben' },
  { id: '04', title: 'Katzen füttern' },
  { id: '05', title: 'Hausaufgaben machen' },
  { id: '06', title: 'Zimmer aufräumen' },
  { id: '07', title: 'Weihnachtsbaum schmücken' },
  { id: '08', title: 'Geschenke einpacken' },
  { id: '09', title: 'Karten unterschreiben' },
  { id: '10', title: 'Tisch decken' },
];

app.get('/tasks', (request, response) => {
  response.status(200).send(tasks);
});

app.get('/tasks/:id', (request, response) => {
  response.status(200).send(tasks.find((task) => task.id === request.params.id));
});

app.post('/tasks', (request, response) => {
  tasks.push(request.body);
  response.status(201).send(tasks);
});

app.patch('/tasks/:id', (request, response) => {
  const oldTask = tasks.find((task) => task.id === request.params.id);
  tasks = tasks.map((task) => (task.id === request.params.id ? oldTask : task));
  response.status(200).send(tasks);
});

app.delete('/tasks/:id', (request, response) => {
  tasks = tasks.find((task) => task.id !== request.params.id);
  return response.status(200).send(tasks);
  // return response.status(400)
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Task is listening on port ${port}`);
});

/* eslint-disable max-len */
const express = require('express');

// eslint-disable-next-line import/no-extraneous-dependencies
const session = require('express-session');

const app = express();
const port = 3001;
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
const tasks = require('./tasks');
const swaggerDocument = require('./swagger_output.json');

const path = '/api-docs/swagger.json';

swaggerAutogen('./swagger_output.json', ['./Authentifizierung.js']);
app.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: true,
  cookie: {},
}));
app.get('/api-docs/swagger.json', (req, res) => res.json(swaggerDocument));
app.use('/swagger-ui', swaggerUi.serveFiles(path), swaggerUi.setup(path));

app.use('/tasks', tasks);

// Hier lade ich die Express Middleware damit ich an meine Endpunkte in JSON Body senden kann und diese als JavaScript Objekt verfügbar werden
app.use(express.json());

app.post('/login', (request, response) => {
  const { email, password } = request.body;
  const secretCredentials = request.body;
  // Check the credentials against store
  if (email?.toLowerCase() === secretCredentials.email && password === secretCredentials.password) {
  // Link email to session
    request.session.email = email;

    return response.status(200).json({ email: request.session.email });
  }

  return response.status(401).json({ error: 'Invalid credentials' });
});

app.get('/verify', (request, response) => {
  // Check if email is set in session
  if (request.session.email) {
    return response.status(200).json({ email: request.session.email });
  }

  return response.status(400).json({ error: 'Not logged in' });
});

app.delete('/logout', (request, response) => {
  // Check if email is set in session
  if (request.session.email) {
    // Reset link of session to email
    request.session.email = null;
    return response.status(204).send();
  }

  return response.status(401).json({ error: 'Not logged in' });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Task is listening on port ${port}`);
});

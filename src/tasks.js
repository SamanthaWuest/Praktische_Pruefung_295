const express = require('express');
const { appendFile } = require('fs');
const port = 3000;

let tasks = [
    { id: "01", title: "Zimmer staubsaugen"},
    { id: "02", title: "Wäsche machen"},
    { id: "03", title: "Katzen füttern"},
    { id: "04", title: "Bad abstauben"},
    { id: "05", title: "Hausaufgaben machen"},
    { id: "06", title: "Zimmer aufräumen"},
    { id: "07", title: "Weihnachtsbaum schmücken"},
    { id: "08", title: "Geschenke einpacken"},
    { id: "09", title: "Karten unterschreiben"},
    { id: "10", title: "Tisch decken"}
]


app.get('/tasks', (request, response) => {
    response.send(tasks);
});

app.post('/tasks', (request, response) => {
    response.send();
});

app.get('/tasks/:id', (request, response) => {
    tasks = tasks.find((tasks) => tasks.id === request.params.id ? request.body : tasks);
    response.send(tasks);
});
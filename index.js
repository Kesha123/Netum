const express = require('express');
const bodyParser = require('body-parser');
const query = require('./database/query');

const port = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();});


// Add a person
app.post('/api/person', query.addPerson);

// Delete person
app.delete('/api/person/:id', query.deletePerson);

// Search all people
app.get('/api/person', query.getAllPeople);

// Update person
app.put('/api/person/:id', query.updatePerson);

// Get one person
app.get('/api/person/:id', query.getPerson);

// Get all people and sort
app.get('/api/person/:column/:order', query.getSortAllPeople);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
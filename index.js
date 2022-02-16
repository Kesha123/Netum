const express = require('express');
const bodyParser = require('body-parser');
const query = require('./database/query');

const port = 3000;

const app = express();
app.use(bodyParser.json());


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


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
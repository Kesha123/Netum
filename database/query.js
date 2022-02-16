const db = require('./dbconfig');

// Add a person
const addPerson = (req, res) => {
    const newPerson = req.body;

    const query = {
        text: 'INSERT INTO persons (firstname, lastname, age) VALUES ($1, $2, $3)',
        values: [newPerson.firstname, newPerson.lastname, newPerson.age],
    }

    db.query(query, (err, result) => {
        if (err) {
            return console.log('Error executing query', err.stack);
        }
    })

    res.json(newPerson);
}

// Delete person
const deletePerson = (req, res) => {}

// Search all people
const getAllPeople = (req, res) => {}

// Update one person
const updatePerson = (req, res) => {}

// Get one person
const getPerson = (req, res) => {}

module.exports = {
    addPerson: addPerson,
    deletePerson: deletePerson,
    getAllPeople: getAllPeople,
    updatePerson: updatePerson,
    getPerson: getPerson
}
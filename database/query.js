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
const deletePerson = (req, res) => {
    const query = {
        text: 'DELETE FROM persons WHERE id = $1',
        values: [req.params.id]
    }

    db.query(query, (err, result) => {
        if (err) {
            return console.log('Error executing query', err.stack);
        }
    })

    res.status(204).end();
}

// Search all people
const getAllPeople = (req, res) => {
    db.query('SELECT * FROM persons', (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(result.rows);
        }
    })
}

// Update one person
const updatePerson = (req, res) => {
    const updatedPerson = req.body;

    const query = {
        text: 'UPDATE persons SET firstname=$1, lastname=$2, age=$3 WHERE id = $4',
        values: [updatedPerson.firstname, updatedPerson.lastname, updatedPerson.age, req.params.id],
    }

    db.query(query, (err, res) => {
        if (err) {
          return console.error('Error executing query', err.stack)
        }
    })
    
    res.json(updatedPerson);
}

// Get one person
const getPerson = (req, res) => {
    const query = {
        text: 'SELECT * FROM persons WHERE id = $1', 
        values: [req.params.id],
    }

    db.query(query, (err, result) => {
        if (err) {
          return console.error('Error executing query', err.stack)
       }
       else {
         if (result.rows.length > 0)
           res.json(result.rows);
         else
           res.status(404).end();
       }
      })
}


// Get all people and sort
const getSortAllPeople = (req, res) => {

    const query = `SELECT * FROM persons ORDER BY ${req.params.column} ${req.params.order}`

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.json(result.rows);
        }
    })
}


module.exports = {
    addPerson: addPerson,
    deletePerson: deletePerson,
    getAllPeople: getAllPeople,
    updatePerson: updatePerson,
    getPerson: getPerson,
    getSortAllPeople: getSortAllPeople
}
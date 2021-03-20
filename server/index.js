const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()

const db = new sqlite3.Database('employee')

db.run('CREATE TABLE IF NOT EXISTS emp(id INT, Firstname TEXT, Lastname TEXT)')

app.get('/', (req, res) => {
    res.send("<h3> Hi there, You are going to perform CRUD operations.............[CREATE] Please enter 'http://localhost:3000/add/(id number)/(firstname)/(lastname)' to add new employee to the database.........................[READ] 'http://localhost:3000/view/(id number)' to view an employee.........................[UPDATE] 'http://localhost:3000/update/(id number)/(new name)' to update an employee.....................[DELETE] 'http://localhost:3000/del/(id number)' to delete an employee...............................Before closing this window, kindly enter 'http://localhost:3000/close' to close the database connection <h3>")
})

// CREATE
app.get('/add/:id/:firstname/:lastname', (req, res) => {
    db.serialize(() => {
        db.run('INSERT INTO emp(id, Firstname, Lastname) VALUES(?,?,?)',
            [req.params.id, req.params.firstname, req.params.lastname], err => {
                if (err) return console.log(err.message)
                console.log("New employee has been added")
                res.send("New employee has been added into the database with ID = " + req.params.id + " and Firstname = " + req.params.firstname + " and Lastname = " + req.params.lastname)
            })
    })
})

// READ
app.get('/view/:id', (req, res) => {
    db.serialize(() => {
        db.each('SELECT id, Firstname, Lastname FROM emp WHERE id=?', [req.params.id], (err, row) => {
            if (err) {
                res.send("Error")
                return console.error(err.message)
            }
            res.send(`${row.id}. ${row.Firstname} ${row.Lastname} `)
            console.log("Success")
        })
    })
})



app.listen(3001, () => {
    console.log("server is running on port 3001")
})
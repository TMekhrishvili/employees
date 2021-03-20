const express = require('express')
var cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const app = express()


const db = new sqlite3.Database('employee')

db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, Firstname TEXT, Lastname TEXT)')
app.use(cors())

//GET LIST
app.get('/', (req, res) => {
    db.all("SELECT * FROM users", (err, rows) => {
        res.send(rows)
    });
})

// CREATE
app.get('/add/:firstname/:lastname', (req, res) => {
    db.serialize(() => {
        db.run('INSERT INTO users(Firstname, Lastname) VALUES(?,?)',
            [req.params.firstname, req.params.lastname], err => {
                if (err) return console.log(err.message)
                console.log("New employee has been added")
                res.send("New employee has been added into the database with ID = " + req.params.id + " and Firstname = " + req.params.firstname + " and Lastname = " + req.params.lastname)
            })
    })
})

// READ
app.get('/view/:id', (req, res) => {
    db.serialize(() => {
        db.each('SELECT id, Firstname, Lastname FROM users WHERE id=?', [req.params.id], (err, row) => {
            if (err) {
                res.send("Error")
                return console.error(err.message)
            }
            res.send(`${row.id}. ${row.Firstname} ${row.Lastname} `)
            console.log("Success")
        })
    })
})

// UPDATE
app.get('/update/:id/:firstname/:lastname', (req, res) => {
    db.serialize(() => {
        db.run('UPDATE users SET firstname = ?, lastname = ? WHERE id = ?',
            [req.params.firstname, req.params.lastname, req.params.id],
            err => {
                if (err) {
                    res.send("Error")
                    return console.error(err.message)
                }
                res.send("Update Successfully")
                console.log("Update Successfully")
            })
    })
})

// DELETE
app.get('/del/:id', (req, res) => {
    db.serialize(() => {
        db.run('DELETE FROM users WHERE id=?', req.params.id,
            err => {
                if (err) {
                    res.send("Error")
                    return console.error(err.message)
                }
                res.send("Entry Deleted")
                console.log("Entry Deleted")
            }
        )
    })
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
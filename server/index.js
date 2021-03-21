const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const cors = require('cors')
app.use(cors())

const db = new sqlite3.Database('database')

db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, Firstname TEXT, Lastname TEXT)')


//GET LIST
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM users'
    const callback = (err, rows) => {
        res.send(rows)
    }
    db.all(sql, callback)
})

// CREATE
app.get('/add/:firstname/:lastname', (req, res) => {

    const sql = 'INSERT INTO users(Firstname, Lastname) VALUES(?,?)'
    const params = [req.params.firstname, req.params.lastname]

    const callback = err => {
        if (err) return console.log(err.message)
        console.log("New user has been added")
        res.send("New user has been added into the database with ID = " + req.params.id + " and Firstname = " + req.params.firstname + " and Lastname = " + req.params.lastname)
    }

    db.serialize(() => {
        db.run(sql, params, callback)
    })
})

// READ
app.get('/view/:id', (req, res) => {

    const sql = 'SELECT id, Firstname, Lastname FROM users WHERE id=?'
    const param = req.params.id

    const callback = (err, row) => {
        if (err) {
            res.send("Error")
            return console.error(err.message)
        }
        res.send(row)
        console.log("Success")
    }
    const callbackRun = () => {
        db.each(sql, param, callback)
    }
    db.serialize(callbackRun)
})

// UPDATE
app.get('/update/:id/:firstname/:lastname', (req, res) => {

    const sql = 'UPDATE users SET firstname = ?, lastname = ? WHERE id = ?'
    const params = [req.params.firstname, req.params.lastname, req.params.id]

    const callback = err => {
        if (err) {
            res.send("Error")
            return console.error(err.message)
        }
        res.send("Update Successfully")
        console.log("Update Successfully")
    }
    const callbackRun = () => {
        db.run(sql, params, callback)
    }
    db.serialize(callbackRun)
})

// DELETE
app.get('/del/:id', (req, res) => {

    const sql = 'DELETE FROM users WHERE id=?'
    const param = req.params.id

    const callback = err => {
        if (err) {
            res.send("Error")
            return console.error(err.message)
        }
        res.send("Entry Deleted")
        console.log("Entry Deleted")
    }
    const callbackRun = () => {
        db.run(sql, param, callback)
    }

    db.serialize(callbackRun)
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
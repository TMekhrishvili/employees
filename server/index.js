const express = require('express')
const sqlite3 = require('sqlite3').verbose()
const app = express()
const cors = require('cors')
const { getListSQL, createSQL, readSQL, updateSQL, deleteSQL } = require('./scripts')
app.use(cors())
app.use(express.json());
// create application/json parser
const PORT = 3001
app.listen(PORT, () => {
    console.log("server is running on port 3001")
})


const db = new sqlite3.Database('database')
db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, Firstname TEXT, Lastname TEXT)')

//GET LIST
const getListCallback = (req, res) => {

    const callback = (err, rows) => {
        res.send(rows)
    }
    db.all(getListSQL, callback)
}
app.get('/', getListCallback)

// CREATE
const createCallback = (req, res) => {
    const params = [req.body.firstname, req.body.lastname]

    const callback = err => {
        if (err) return console.log(err.message)
        console.log("New user has been added")
        res.send("New user has been added into the database with " + "Firstname = " + req.body.firstname + " and Lastname = " + req.body.lastname)
    }

    db.serialize(() => {
        db.run(createSQL, params, callback)
    })
}
app.post('/add', createCallback)


// READ
const readCallback = (req, res) => {

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
        db.each(readSQL, param, callback)
    }
    db.serialize(callbackRun)
}
app.get('/view/:id', readCallback)

// UPDATE
const updateCallback = (req, res) => {

    const params = [req.body.firstname, req.body.lastname, req.body.id]

    const callback = err => {
        if (err) {
            res.send("Error")
            return console.error(err.message)
        }
        res.send("Update Successfully")
        console.log("Update Successfully")
    }
    const callbackRun = () => {
        db.run(updateSQL, params, callback)
    }
    db.serialize(callbackRun)
}
app.put('/update', updateCallback)

// DELETE
const deleteCallback = (req, res) => {

    const params = req.params.id

    const callback = err => {
        if (err) {
            res.send("Error")
            return console.error(err.message)
        }
        res.send("Entry Deleted")
        console.log("Entry Deleted")
    }

    const callbackRun = () => {
        db.run(deleteSQL, params, callback)
    }

    db.serialize(callbackRun)
}
app.delete('/delete/:id', deleteCallback)


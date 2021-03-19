const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('Users')


let arr = [
    [1, "Temur", "Chkadua"],
    [2, "Vakhtang", "Kvaratskhelia"],
    [3, "Bakur", "Buchukuri"],
    [4, "Malkhaz", "Ashordia"],
    [5, "Nestan", "Kekelia"],
];

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, Firstname TEXT, Lastname TEXT)")
    var stmt = db.prepare("INSERT INTO user VALUES (?,?,?)");
    for (var i = 0; i < arr.length; i++) {
        stmt.run(arr[i], error => {
            if (error) throw error
        })
    }
    stmt.finalize();
})
var str = ""

db.each("SELECT id, Firstname FROM users", (err, row) => {
    str += (row.id + ". " + row.Firstname + " " + row.Lastname + ". ")
})

app.get('/', (req, res) => {
    res.send(str)
})

app.listen(3001, () => {
    console.log("server is running on port 3001")
})
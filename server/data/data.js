const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('database')
db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, Firstname TEXT, Lastname TEXT)')

module.exports = db
const db = require('../data/data')
const { createSQL } = require('../data/scripts')

const postRoute = (req, res) => {
    const params = [req.body.firstname, req.body.lastname]
    console.log(req)
    const callback = err => {
        if (err) return console.log(err.message)
        console.log("New user has been added")
        res.send("New user has been added into the database with " + "Firstname = " + req.body.firstname + " and Lastname = " + req.body.lastname)
    }

    db.serialize(() => {
        db.run(createSQL, params, callback)
    })
}

module.exports = postRoute
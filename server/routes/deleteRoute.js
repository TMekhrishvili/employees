const db = require('../data/data')
const { deleteSQL } = require('../data/scripts')

const deleteRoute = (req, res) => {

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

module.exports = deleteRoute
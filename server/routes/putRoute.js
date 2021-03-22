const db = require('../data/data')
const { updateSQL } = require('../data/scripts')

const putRoute = (req, res) => {

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

module.exports = putRoute
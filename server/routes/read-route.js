const db = require('../data/data')
const { readSQL } = require('../data/scripts')

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

module.exports = readCallback
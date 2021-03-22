const db = require('../data/data')
const { getListSQL } = require('../data/scripts')

const getListRoute = (req, res) => {

    const callback = (err, rows) => {
        res.send(rows)
    }
    db.all(getListSQL, callback)
}

module.exports = getListRoute
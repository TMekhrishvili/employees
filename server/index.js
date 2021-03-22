const express = require('express')
const app = express()
const cors = require('cors')

// routes
const createCallback = require('./routes/create-route')
const getListCallback = require('./routes/get-list-route')
const readCallback = require('./routes/read-route')
const updateCallback = require('./routes/update-route')
const deleteCallback = require('./routes/delete-route')

app.use(cors())
app.use(express.json());

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// crud methods
app.get('/', getListCallback)
app.post('/add', createCallback)
app.get('/view/:id', readCallback)
app.put('/update', updateCallback)
app.delete('/delete/:id', deleteCallback)
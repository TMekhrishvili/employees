const express = require('express')
const app = express()
const cors = require('cors')

// routes
const postRoute = require('./routes/postRoute')
const getListRoute = require('./routes/getListRoute')
const getRoute = require('./routes/getRoute')
const putRoute = require('./routes/putRoute')
const deleteRoute = require('./routes/deleteRoute')

app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

// crud methods
app.get('/', getListRoute)
app.post('/add', postRoute)
app.get('/view/:id', getRoute)
app.put('/update', putRoute)
app.delete('/delete/:id', deleteRoute)
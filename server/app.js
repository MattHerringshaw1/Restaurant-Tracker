
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())

const restaurants = []

app.post('/add-restaurant', (req, res) => {
    
})

app.listen(8080, () => {
    console.log('server is running...')
})
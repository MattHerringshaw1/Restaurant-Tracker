
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const restaurantDB = require('./models')



app.post('/api/register', (req, res) => {
    
    res.json('register')
})

app.post('/api/login', (req, res) => {

    res.json('login')
})


app.post('/api/add-restaurant', async (req, res) => {
    const { restaurantName, address1, address2, rating } = req.body
    await restaurantDB.Restaurant.create({
        restaurant_name: restaurantName,
        restaurant_address_1: address1,
        restaurant_address_2: address2,
        restaurant_rating: rating,
    })
    res.send({success: true, message: 'restaurant added' })
})

app.get('/api/add-restaurant', async (req, res) => {
    let result = await restaurantDB.Restaurant.findAll({})
    res.json(result)
})



app.listen(8080, () => {
    console.log('server is running...')
})
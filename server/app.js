
const express = require('express')
const app = express()
const cors = require('cors')


const restaurantDB = require('./models')
const reviewDB = require('./models')
const userDB = require('./models')
const jwt = require('jsonwebtoken')
const authenticate = require('./middlewares/authMiddleware')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.post('/api/register', async (req, res) => {
    const { userName, userPassword } = req.body
    if(!userName || !userPassword) {
        res.json({success: false, message: 'Invalid request, please fill in textboxes.'})
        return 
    }
    await userDB.User.create({
        username: userName,
        password: userPassword
    })
    res.json('register')
})

app.get('/token', (req, res) => {
    const token = jwt.sign({}, 'SECRETKEYJWT')
    res.json({ token: token })
})

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    const savedUser = await userDB.User.findOne({
        where: {username: username, password: password}
    })
    if (savedUser) {
        const token = jwt.sign({ username: savedUser.username }, 'SECRETKEYJWT')
        res.json({ success: true, token: token, username: savedUser.username, userId: savedUser.id })
    } else {
        res.json({ success: false, message: 'Username or password is incorrect.' })
    }
})


app.post('/api/add-restaurant', async (req, res) => {
    const { restaurantName, address1, address2, rating, userId } = req.body
    console.log(req.headers)
    if(!restaurantName || !address1 || !address2 || !rating) {
        res.json({success: false, message: 'Invalid request, please fill in textboxes.'})
        return 
    }
    await restaurantDB.Restaurant.create({
        restaurant_name: restaurantName,
        restaurant_address_1: address1,
        restaurant_address_2: address2,
        restaurant_rating: rating,
        user_id: userId
    })
    res.send({success: true, message: 'restaurant added' })
})

app.get('/api/view-restaurants', authenticate, async (req, res) => {
   
    const { userid } = req.headers
    console.log(userid)
    console.log(req.headers)
    let result = await restaurantDB.Restaurant.findAll({   
        where: {
            user_id: userid
}})
    // console.log(result)
    // console.log(restaurantDB)
    res.json(result)
})

app.post('/api/delete-restaurant', async (req, res) => {
    const { id } = req.body
    // console.log(id)
    await reviewDB.Review.destroy({where: {restaurant_id: id}})
    await restaurantDB.Restaurant.destroy({where: {id: id}})
    res.send({success: true, message: 'restaurant deleted' })
})

app.post('/api/add-review', async (req, res) => {
    console.log(req.body)
    const { restReview, restId } = req.body
    if(!restReview) {
        res.json({success: false, message: 'Invalid request, please fill in review textbox.'})
        return 
    }
    await reviewDB.Review.create({
        body: restReview,
        restaurant_id: restId
    })
    res.send({success: true, message: 'review added'})
})

app.get('/api/view-reviews', authenticate, async (req, res) => {
    let result = await reviewDB.Review.findAll({})
    // console.log(result)
    // console.log(reviewDB)
    res.json(result)
})

app.post('/api/delete-review', async (req, res) => {
    const { id } = req.body
    // console.log(id)
    await reviewDB.Review.destroy({where:
        {id: id}
    })
    res.send({success: true, message: 'restaurant deleted' })
})



app.listen(8080, () => {
    console.log('server is running...')
})
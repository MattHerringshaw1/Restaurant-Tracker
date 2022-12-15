const jwt = require('jsonwebtoken')
const models = require('../models')


function authenticate(req, res, next) {
    const header = req.headers['authorization']
    if(header) {
        const token = header.split(' ')[1]
        try {
            const decoded = jwt.verify(token, 'SECRETKEYJWT')
            if (decoded) {
                const username = decoded.username 
                const authUser = models.User.findOne({
                    where: {
                        username: username
                    }
                })
                if(authUser) {
                    next()
                } else {
                    res.json({error: 'Unable to authenticate 1'})
                }
            } else {
                res.json({error: 'Unable to authenticate 2'})
            }
        } catch {
            res.json({error: 'Unable to authenticate 3'})
        }
    } else {
        res.json({error: 'Required authorization headers are missing.'})
    }
}

module.exports = authenticate 
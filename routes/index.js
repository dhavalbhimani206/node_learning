const express = require("express")

const router = express.Router()

router.get('/', (req, res, next) => {
    res.send("hello from routes")
})

router.get('/json', (req, res, next) => {
    const a = {
        greet: "hello"
    }
    res.json(a)
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})
module.exports = router
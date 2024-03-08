const express = require('express')
const router = express.Router()

router.get("/", (req,res) => {
    res.render('index', {title: "HOME PAGE"})
})

router.get('/add', (req, res) => {
    res.render('add_events', {
        title: "Add Events"
    })
})


module.exports = router
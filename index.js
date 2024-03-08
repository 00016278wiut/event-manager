//imports
require('dotenv').config()
const express = require('express')
const mongose = require('mongoose')
const session = require('express-session')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret: 'secret key',
    saveUninitialized: true,
    resave: false,
}))
app.use((req,res,next) => {
    res.locals.message = req.session.message
    delete req.session.message
    next()
})

app.use(express.static(path.join(__dirname, 'public')))

//set template engine
app.set('view engine', 'ejs')

//router prefix 
app.use("", require('./routes/routes'))

const start = async () => {
    try {
        await mongose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("db connected")
        app.listen(PORT, () => {
            console.log(`Server start on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start ()

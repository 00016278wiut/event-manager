const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description:{
        type: String,
        require:true,

    },
    location: {
        trype: String,
        require: true
    },
    date: {
        type: Date,
        require: true,
        default: Date.now,
    },
})

module.exports = mongoose.model('Users', userSchema)
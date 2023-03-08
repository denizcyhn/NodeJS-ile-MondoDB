const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const userSchema = mongoose.Schema({
    name: reqString,
    username: reqString
})

module.exports = mongoose.model('users', userSchema)
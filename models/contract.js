const mongoose = require('mongoose')
const contractSchema = mongoose.Schema({
    contractId : String,
    name : String
})

module.exports =  mongoose.model('Contract',contractSchema)
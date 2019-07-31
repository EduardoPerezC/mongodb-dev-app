const mongoose = require('mongoose')
const schema = mongoose.Schema({
    custId : {
        type : String,
        required : [true,'custId is mandatory']
    },
    name : {
        type : String,
        required : [true,' customer name is mandatory']
    },
    origin : String
})

module.exports =  mongoose.model('Customer',schema)

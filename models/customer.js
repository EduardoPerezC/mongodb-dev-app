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

exports.customerSchema = schema
exports.customerModel  =  mongoose.model('Customer',schema)

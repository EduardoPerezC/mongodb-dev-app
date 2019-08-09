const mongoose = require('mongoose')
const joi = require('joi')

const schema = mongoose.Schema({
    name : {
        type : String,
        require:true
    },
    numericCode : String,
    alphaCode2 : String,
    alphaCode3 : String
})

function validateCountry(country){

    const valSchema = joi.object({
        code : joi.string().required().regex(/^[A-Z]{3}$/),
        name : joi.string().required(),
        alphaCode2 : joi.string().regex(/^[A-Z]{2}$/),
    })

    return joi.validate(country,valSchema)
}

exports.countrySchema = schema
exports.validate = validateCountry
exports.Country =  mongoose.model('Country',schema)
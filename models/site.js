 const mongoose = require('mongoose')
 const { contractSchema} =  require('./contract')
 const { customerSchema} = require('./customer') // import schemas to implement hybrid object reference approach
 const { countrySchema} =  require('./country')
 const joi = require('joi')

 const schema = mongoose.Schema({
    legalEntity : {
        type : customerSchema,
        required : true
    },
    contract:{
        type : contractSchema,
        required : true
    },
    address : {
        country : {
            type:countrySchema,
            required : true
        },
        state : String,
        city : String,
        addr1 : String,
        zipCode : {
            type : String,
            validate : {
                validator : function(v){
                    return /^[A-Z][0-9]{5}$/.test(v)
                },
                message : 'Zip Code must be a 5 afphanumeric value length'
            }
        }
    
    }

 })


 function validateSite(site){

    //complex schema , a isolated schema for 'address' must be created and assigned to a key

    const addressInfoValidationSchema = joi.object({
        countryCode : joi.string().required(),
        state : joi.string().when('countryCode',{
            is : 'USA',
            then: joi.string().required()  //when allows to define a conditional validation
        }),
        city : joi.string().required(),
        addr1 : joi.string().required(),
        zipCode : joi.string().regex(/^[A-Z][0-9]{5}$/)
    })

    const siteValidationSchema  = joi.object({
        leId : joi.string().required(),
        contractCode : joi.string().required(),
        address : addressInfoValidationSchema // the child addressInfo schema is used to perform validation of nested object
    })

    return joi.validate(site,siteValidationSchema)

 }

 module.exports.siteMongoSchema = schema
 module.exports.validateSite = validateSite
 module.exports.siteModel = mongoose.model('Site',schema) // compile the schema into a model and create a new document collection based on plural,lower case ,model name
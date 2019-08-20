const mongoose = require('mongoose')
const joi =  require('joi')
const { assetModelSchema} =  require('./assetModel')

const schema = mongoose.Schema({
    assetId : {
        type : String,
        required : true
    },
    source : String,
    version : String,
    siteId : String,
    lifeCycle : String,
    status : {
        type : String,
        enum : ['Active','Cancelled']
    },
    model : {
        type : assetModelSchema,
        required : true
    },
    ipAddress : {
        type : String,
        validate : {
            validator : function(value){
                return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(value)
            },
            message : function(props){
                return `${props.value} is not a valid IP Address!`
            }
        }
    },
    hostName : {
        type : String,

    }
})

function validate(asset){

      joi.object({
        assetId : joi.string(),
        action : joi.string().valid(['Add','Modify']),
        source : joi.string(),
        version : joi.string(),
        site : joi.string(),
        lifeCycle : joi.string(),
        status : joi.string(),
        model : joi.string(),
        ipAddress : joi.string(),
        hostName : joi.string()
    })

    

}
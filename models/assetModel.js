const mongoose = require('mongoose')
const joi = require('joi')

const schema = mongoose.Schema({
    modelNumber : {
        type : String,
        required : [true, 'Model Number is mandatory']
    },
    modelCertification : {
        type : String,
        required : [true, 'Certification is mandatory']
    },
    modelType : {
        type : String,
        validate:{
            validator : function(value){
               return /^[M0-9]*$/.test(value)
            },
            message : function(props){
                return `${props.value} is not a valid model Type!`
            }
        },
        minlength: 5,
        maxlength: 10,
        required : [true, 'Model Type is mandatory']
    }

})

function validate(assetModel){

    const valSchema = joi.object({
        modelNumber : joi.string().required().regex(/^[A-Z0-9]{5}$/),
        modelCertification : joi.string().required(),
        modelType : joi.string().required()
    })

    return joi.validate(assetModel,valSchema)

}

module.exports.validateAssetModel = validate
module.exports.assetModelSchema = schema
module.exports.assetModel = mongoose.model('AssetModel',schema)






const mongoose = require('mongoose')
const contractSchema = mongoose.Schema({
    contractId : String,
    name : String,
    customer : {
        type : mongoose.SchemaTypes.ObjectId,
        ref : 'Customer'
    }
})

var siteTest = {
    leid : 'fwgwg',
    contractId : 'sdvdv',
    customer : {
        code : 'vve',
        name : 'name'
    },
    address : {
        country : 'USA',
        state : 'TX',
        addr1 : 'Main Street',
        postalCode : '20980'
    },
    contacts : [
        {
            contactType : '',
            name : '',

        }
    ]

}

//contracts
//billmodel
//country

//assets
//circuits
//orders
//sites

//site
//--customer
//--address


//country|billModel|contract|Customer|currency|active

//compiling the schema into a model
//exporting the model object
module.exports =  mongoose.model('Contract',contractSchema)
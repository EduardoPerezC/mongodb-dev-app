const express = require('express')
const app = express()
const port = process.env.DEV_PORT || 3037
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/genesys')
.then(()=> console.log('successfully connected'))
.catch((error)=> console.error('unable to connect',error))


//1- create the schema, like a table structure
const clientSchema = mongoose.Schema({
    clientId : String,
    firstName : String,
    lastName : String
})

//2 compile the schema into a model
const Client =  mongoose.model('Client',clientSchema)


Client.create({
    clientId : '003',
    firstName : 'Edward',
    lastName : 'Thompson'
},(err,result)=>{

    if(!err){
        console.log(result)
    }

})



app.listen(port,(args)=>{
    console.log('listening on Port ' + port)
})

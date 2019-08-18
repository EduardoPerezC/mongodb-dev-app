const express = require('express')
const app = express()
const port = process.env.DEV_PORT || 3037
const mongoose = require('mongoose')
const customerRouter = require('./routes/customer')
const countryRouter = require('./routes/country')
const assetModelRouter =  require('./routes/assetModel')

var url = 'mongodb://localhost:27017/genesys'

mongoose.connect(url,{ useNewUrlParser: true } ,(err)=> {

    if(err != null){
        console.log(err)
    }
    else{
        console.log('sucessfully connected')
    }
})


app.use('/customer',customerRouter)
app.use('/country',countryRouter)
app.use('/assetModel',assetModelRouter)
app.listen(port,()=> console.log('listening on port : '+ port))


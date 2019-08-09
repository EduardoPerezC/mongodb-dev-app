const express = require('express')
const router =  express.Router()
const { validateSite, siteModel} = require('../models/site')
const { customerModel } =  require('../models/customer')

//adding a built in middleware to parse request body
router.use(express.json())

router.post('/',(req,resp)=>{

    const { error, value} =  validateSite(req.body)

    if(error){
        resp.status(404).send(error)
        return
    }

    //validate passed object references before creating the document
      customerModel.find({ custId : req.body.leId})



})


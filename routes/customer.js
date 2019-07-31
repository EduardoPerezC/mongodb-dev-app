const customerModel = require('../models/customer')
const express = require('express')
const router =  express.Router()

router.use(express.json())

router.post('/create',(req,resp,next)=>{

     customerModel.create(req.body,(err,result)=>{

        if(err){
            resp.send(err)
        }
        else{
            resp.send(result)
        }

     })

})

module.exports = router
const express = require('express')
const { Country,validate } = require('../models/country')
const router = express.Router()

//adding built in json middleware
router.use(express.json())

router.post('/create', (req,resp,next)=>{

    const { error} = validate(req.body)
    resp.send(error)

})

module.exports = router


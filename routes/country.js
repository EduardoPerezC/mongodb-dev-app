const express = require('express')
const { Country,validate } = require('../models/country')
const router = express.Router()

//adding built in json middleware
router.use(express.json())

router.post('/create', async (req,resp)=>{

    const { error} = validate(req.body)

    if(error){
        resp.status(404).send(error.details[0].message)
        return;
    }

    try {
        const newCountry =  await Country.create(req.body)
        resp.send(newCountry)

    } catch (error) {
        resp.status(404).send('country is not valid')
    }

})

module.exports = router


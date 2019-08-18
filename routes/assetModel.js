const express = require('express')
const router =   express.Router()
const { validateAssetModel, assetModel} = require('../models/assetModel')

router.use(express.json())

router.get('/',async (req,resp)=>{
    const result =  await assetModel.find().select('modelNumber modelCertification modelType')
    resp.send(result)
})

router.post('/',async (req,resp)=>{

    const { error} =  validateAssetModel(req.body)
    if(error){
        resp.send(error.details[0].message)
        return
    }

    try {
        const result =  await assetModel.create(req.body)
        resp.send(result)
    } catch (error) {
        console.log(error)
        resp.send(error)
    }

})

router.get('/:modelNumber',async (req,resp)=>{

    const assetModelDoc =  await assetModel.findOne({ modelNumber: req.params.modelNumber })

    if(!assetModelDoc){
        resp.send({ message : `${req.params.modelNumber} is not a valid Model Number!`})
        return
    }

    resp.send(assetModelDoc)
})

module.exports = router

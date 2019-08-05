const customerModel = require('../models/customer')
const contractModel = require('../models/contract')
const express = require('express')
const router =  express.Router()

router.use(express.json())//middleware 

async function createCustomer(customer){
        
    const newCustomer = await customerModel.create(customer)
    const contracts = customer.contracts || []

    contracts.forEach(contract => {
        contract.customer = newCustomer._id
    });
    
    if(contracts.length >  0){
        const assignedContracts = await contractModel.create(contracts)
        return customerModel.aggregate([
            {
                $lookup: //operator
                  {
                    from: "contracts",
                    localField: "_id",
                    foreignField: "customer",
                    as: "contracts"
                  }
             },
             { $match : { custId : newCustomer.custId } } // match operator
        ])
    }
    
    return newCustomer

}

router.post('/create',(req,resp,next)=>{

    createCustomer(req.body)
        .then(newCustomer => resp.send(newCustomer))
        .catch(err => resp.send(err))

})

module.exports = router
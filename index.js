const express = require('express')
const app = express()

const port = process.env.DEV_PORT || 3037

app.get('/test',(request,response)=>{
    response.send('Keep Alive Page')
})

function test(){
    console.log('this is a test')
}

test()

app.listen(port,(args)=>{
    console.log('running on Port ' + port)
})

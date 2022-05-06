const express = require('express')
const apirouter = require('./routes/api-routes')
const mongoose = require('mongoose')

const app = express()

const port = 3002
app.use(express.json())


app.use('/',apirouter)

const url = "mongodb+srv://Prashant12:1234@cluster0.uytko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(url , {useNewUrlParser:true})
.then(()=>{
    console.log("database connected")
})
.catch(err => console.log(err))

app.listen(port, () =>{
    console.log(`database is running on http://localhost:${port}`)
})




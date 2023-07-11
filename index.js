const express= require('express');
const mongoose=require('mongoose')
const route=require('./routes/route');
mongoose.connect("mongodb+srv://vijaybhaskar199912:vijay@cluster0.mznwfwq.mongodb.net/")
const database=mongoose.connection
database.on('error',(error)=>{
    console.log(error)
})

database.once('connected',()=>{
    console.log('database is connected')
})

const app=express()

app.use(express.json())
app.listen(4000,()=>{
    console.log('server is coneected')
})

app.use('/api',route)
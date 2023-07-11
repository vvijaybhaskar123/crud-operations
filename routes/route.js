const express =require('express')
const Model=require('../module/module')
const route=express.Router()
route.post('/post', async(req,res)=>{
    const data=new Model({
        name:req.body.name,
        age:req.body.age,
        number:req.body.number
    })
    try{
        const datatoSave=await data.save()
        res.status(200).json(datatoSave)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

route.get('/getAll',async(req,res)=>{
    try{
        const data= await Model.find()
        res.status(200).json(data)
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
})

route.get('/getone/:id', async(req,res)=>{
        
        try{
            const id= await Model.findById(req.params.id)
            res.status(200).json(id)
        }
        catch(error){
            res.status(400).json({ errormessage:error.message})
        }
})
route.patch('/update/:id', async(req,res)=>{
    try{
            const id= req.params.id
            const body=req.body
            const options ={new:true}

            const update= await Model.findByIdAndUpdate(id,body,options)
            res.status(200).json(update)
    }
    catch(error){
        res.status(400).json({ errormessage:error.message})
    }
})
route.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const deleted= await Model.findByIdAndDelete(id)
        res.send(`database with id ${deleted.name} has been deleted` )
    }catch(error){
        res.status(400).json({errormessage:error.message})
    }
})
module.exports=route


const route=require('express').Router()
const { sequelize } = require('../models')


// Register User
route.post('/register',async(req,res)=>{
    try {
        const{firstName,lastName,phone,email}=req.body
    
        if(firstName&&lastName&&phone&&email){
           await sequelize.models.User.create({firstName,lastName,phone,email})
            res.send({meassage:'Your registered sucussesfully'})

        }else{
            res.send({meassage:'please fill all the details'})
        }
    } catch (error) {
        console.log(error)
        res.send(error.meassage)
    }

})
// Get User by ID   
route.get('/user/:id',async(req,res)=>{
    console.log(req.query)
    try {
        const data=await sequelize.models.User.findOne({where:{id:req.params.id}})
        if (data){
            res.json(data).send(200)
        }else{
            res.json({message:'user not found'})
        }

    } catch (error) {
        res.json({message:error.message}).send(500)
        
    }
})
// Update User
route.put('/user/:id',async(req,res)=>{
    try {
        await sequelize.models.User.update({ ...req.body}, {
            where: {
              id:req.params.id
            }
          });
        res.json({message:'updeted'})
    } catch (error) {
        res.json({meassaage:error.message})
        
    }
})

// delete User
route.delete('/user/:id',async(req,res)=>{
    try {
        await sequelize.models.User.destroy({
            where: {
              id:req.params.id
            }
          });
        res.json({message:'Deleted'})
    } catch (error) {
        res.json({message:error.message})
    }
})
// List All Users with filters
route.get('/user',async(req,res)=>{
    try {
        console.log(req.query)
        if(req.query){
            const data=await sequelize.models.User.findAll({where:req.query})
            res.json(data).send(200)

        }else{
           res.json({message:'incorect query params'}).send(400)
        }
        
        
    } catch (error) {
        res.json({message:error.message})
        
    }
})


module.exports=route
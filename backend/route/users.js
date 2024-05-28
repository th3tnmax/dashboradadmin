
const express = require('express');

const router = express.Router();

const User =require("../models/user");

const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

//post
router.post('/register',async(req, res)=>{
    try {
        salt = bcrypt.genSaltSync(10);
        if (!req.body.name || 
            !req.body.lastname ||
            !req.body.email ||
            !req.body.birthDate ||
            !req.body.tel ||
            !req.body.password 
            ) {
                return res.status(400).send({
                    message : "fill all requred fields : name , lastname , email , password "
                });
        }
        const newUser = {
            name: req.body.name,
            lastname: req.body.lastname,
            email :req.body.email,
            tel :req.body.tel,
            birthDate :req.body.birthDate,
            password :  req.body.password
        };
        passwordcryted = await bcrypt.hashSync(newUser.password , salt);
        newUser.password=passwordcryted;
        const user = await User.create(newUser);
        res.status(201).send(user);
        console.log("user created sucessfully")
    } catch (error) {
        res.status(500).send(error);
    }
});

//login 

router.post('/login',async(req ,res)=>{

    if (!req.body.email ||
        !req.body.password 
        ) {
            return res.status(400).send({
                message : "fill all requred fields : email , password "
            });
    }

    user = await User.findOne({email:req.body.email})
    if (user) {
        pass = bcrypt.compareSync(req.body.password , user.password);
        
        if(pass){
            payload={
                _id : user._id,
                email : user.email,
                name : user.name,
                lastname : user.lastname,
                admin : user.admin,
                paid : user.paid,

            }
            token = jwt.sign(payload , '5562')
            // res.status(200).json({token :token})
            res.status(200).send(user)
            
        }else{
            res.status(401).send('email or password invalid !')
        }

    } else {
        res.status(404).send('email or password invalid !')
    }
})

//get all users 
router.get('/getAllUsers',async(request , response)=>{

    try {
        user = await User.find({
             //count : user.length,
             //data :user
        });
        
        response.status(200).send(user);
    } catch (error) {
        response.status(401).send(error);
    }
});

// get by id
router.get('/getbyid/:id' , async(req , res)=>{
    
    get_id = req.params.id;
    try {
        
        user = await User.findById({ _id: get_id })
        res.status(200).send(user)
    } catch (error) {
        res.send(error);
    }
})

// update user

router.put('/updateUser/:id',async(req, res)=>{

    
    try {
        id = req.params.id;
        new_data = req.body;
        
        updated_user = await User.findByIdAndUpdate( {_id : id} , new_data )
        
        if (!updated_user) {
            return res.status(404).send("user not found");
        }{
            console.log("user update sucessfully")
            return res.status(200).send(updated_user);
        }  

    } catch (error) {
        res.status(500).send(error);
    }
});

// delete usuer

router.delete('/deletebyid/:id', async (req , res)=>{

    try {
        id = req.params.id;
        user_del = await User.findOneAndDelete( {_id : id} )

        if (!user_del) {
            return res.status(404).send("user not found");
        }{
            // console.log("user deleted sucessfully")
            return res.status(200).send("user deleted sucessfully");
        }  
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router
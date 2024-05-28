
const express = require('express');

const router = express.Router();

const Cour =require("../models/Cour");




//get all Courses 
router.get('/getAllCourses ',async(request , response)=>{

    try {
        cour = await Cour.find({
             //count : cour.length,
             //data :cour
        });
        
        response.status(200).send(cour);
    } catch (error) {
        response.status(401).send(error);
    }
});

// get by id
router.get('/getCourbyid/:id' , async(req , res)=>{
    
    get_id = req.params.id;
    try {
        
        cour = await Cour.findById({ _id: get_id })
        res.status(200).send(cour)
    } catch (error) {
        res.send(error);
    }
})

// update Cour

router.put('/updateCour/:id',async(req, res)=>{

    
    try {
        id = req.params.id;
        new_data = req.body;
        
        updated_cour = await Cour.findByIdAndUpdate( {_id : id} , new_data )
        
        if (!updated_cour) {
            return res.status(404).send("Cour not found");
        }{
            console.log("Cour update sucessfully")
            return res.status(200).send(updated_cour);
        }  

    } catch (error) {
        res.status(500).send(error);
    }
});

// delete Cour

router.delete('/deleteCourbyid/:id', async (req , res)=>{

    try {
        id = req.params.id;
        cour_del = await Cour.findOneAndDelete( {_id : id} )

        if (!cour_del) {
            return res.status(404).send("cour not found");
        }{
            // console.log("cour deleted sucessfully")
            return res.status(200).send("cour deleted sucessfully");
        }  
    } catch (error) {
        res.status(500).send(error)
    }
})

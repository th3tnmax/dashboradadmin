
const express = require('express');

const config = require('./config/config');

const mongoose = require('mongoose');

const usersRoute = require('./route/users');

const cors=require('cors');

const app = express();
app.use(express.json());

// middleware for cors policy 
app.use(cors());

// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         allowedHeaders:['Content-Type'],
// })
// );


//route 
app.use('/users', usersRoute)

app.get('/',(request,response)=>{
    console.log(request)
    return response.status(201).send('welcome broudaa ')
});




mongoose.connect(config.mongoDBURL)
    .then(()=>{
        console.log("connect to DB");
        app.listen(config.port, ()=>{
            console.log(`el brouda server is runing on port ${config.port}`);
        });
    })
    .catch((error)=>{
        console.error(error);
    });


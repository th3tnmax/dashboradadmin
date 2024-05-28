
const mongoose = require('mongoose');

const User = mongoose.model('User', {

    
    name: {
        type : String,
        required:true
    },
    lastname: {
        type : String,
        required:true
    },
    birthDate:{
        type:Date,
        required:true
    },
    tel:{
        type:Number,
        required:true,
    },
    email: {
        type : String,
        required:true,
    },
    password: {
        type : String
    },
    url:{
        type:String,
        //required:true,
        default:"",
    },
    subscriber: {
        type: [String], 
        default: [],   
    },
    follower :{
        type: [String], 
        default: [],   
    },
    teacher: {
        type : Boolean,
        //required:true,
        default:false
    },
    admin : {
        type : Boolean,
        //required:true,
        default:false
    },
    
    
})

module.exports = User;
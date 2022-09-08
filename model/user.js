const express=require('express');
const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    fatherName:{
        type:String,
    },
    motherName:String,
    email:String,
    dob:Number,
    country:{
        type:String,
        default:"India"
    }

});

const UserDetails=new mongoose.model("UserDetails",UserSchema);
module.exports=UserDetails;


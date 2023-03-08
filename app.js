const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path')

 const mongoPath=`mongodb+srv://deniz:4534@cluster0.zupbbrn.mongodb.net/?retryWrites=true&w=majority`

module.exports=async()=>{
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}
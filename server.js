const express=require('express');
const app=express();
const mongoose=require('mongoose');
const shortenUrl = require('./models/databaseSchema');

mongoose.connect('mongodb+srv://user:tngzF5jkyoobC66d@cluster0.4qtzn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology:true
});




app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('index')
});



app.listen(5000);
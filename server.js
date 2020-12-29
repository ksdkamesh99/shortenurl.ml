const express=require('express');
const app=express();
const mongoose=require('mongoose');
const shortenUrl = require('./models/databaseSchema');

app.use(express.urlencoded({extended: false}));

let urllg;

mongoose.connect('mongodb+srv://user:tngzF5jkyoobC66d@cluster0.4qtzn.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology:true
});




app.set('view engine','ejs');

app.get('/',async (req,res)=>{
    const result= await shortenUrl.find();
    res.render('index',{result:result});
});



app.post('/shortenurl',async (req,res)=>{
    const url=req.body.long;
    await shortenUrl.create({long:req.body.long});
    res.redirect('/');

});


app.get('/:shorturl',async (req,res)=>{
    const urlsh=req.params.shorturl;
    myresult=await shortenUrl.findOne({short:urlsh});
    if(myresult==null){
        res.sendStatus(404);
    }
    else{
        urllg=myresult.long;
        myresult.clicks++;
        myresult.save();
        
    }
    res.redirect(urllg);
        
});




app.listen(5000,'0.0.0.0');
const mongoose=require('mongoose');

const shortid= require('shortid');

const databaseSchema=new mongoose.Schema({
    long:{
        type: String,
        required:true,
        trim:true
    },
    short: {
        type: String,
        default: shortid.generate

    },
    clicks: {
        type:Number,
        default:0
    }
});

const shortenUrl=mongoose.model('shortenUrl',databaseSchema);

module.exports=shortenUrl;
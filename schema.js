const mongoose=require('mongoose');
const blogpost=mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
        minlength:5
    },
    content:{
        type:String,
        required:true,
        minlength:50
    },
    author:{
        type:String,
    },
    tags:{
        type:[String]
    },
    category:{
        type:String,
        default:'General'
    },
    likes:{
        type:[String],
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date
    }
}); 
const comments=mongoose.Schema({
    username:{
        type:String
    },
    message:{
        type:String,
        required:true
    },
    commentedAt:{
        type:Date,
        default:Date.now
    }
});
const blog=mongoose.model('blogpost',blogpost);
const comment =mongoose.model('comments',comments);
const mongoose = require("mongoose");


//this is the book scehma

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Book title is required"],
        trim:true,
        maxLength:[100,"Title cannot be more than 100 characters"],
    },
    author:{
        type:String,
        required:[true,"Author name is required"],
        trim:true,
       
    },

    year:{
        type:Number,
        required:[true,"Publication year is required"],
        min : [1000,"Year must be atleat 1000"],
        max:[new Date().getFullYear(),"Year cannot be in the  future"]
    
},


creatAt:{
    type:Date,
    default: Date.now
}

})

//year we are creating schema into model and exporting it

// 2 ways to export module
// const Book = mongoose.model("Book",bookSchema);
// module.exports = Book;

module.exports = mongoose.model("Book",BookSchema);
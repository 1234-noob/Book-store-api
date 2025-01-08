const Book = require("../models/book")

const getAllBooks = async (req,res) => {
    try{
        
        const allBooks = await Book.find();
        if(allBooks?.length > 0){
            res.status(200).json({
                success:true,
                message:"Books fetched successfully",
                data:allBooks
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"No books found",
                
            })
        }


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in getting all books",
            data:error
        })
    }
    

}


const getSingleBook = async (req,res) => {
    try {
        const bookId = req.params.id;
        const getBook = await Book.findById(bookId);
        if(getBook){
            res.status(200).json({
                success:true,
                message:`Book with id ${bookId} fetched successfully`,
                data:getBook
            })
        }
        else{
            res.status(404).json({
                success:false,
                message:"No book found",
                
            })
        }
 


   
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in getting the book",
            data:error
        })
    }
        
    }

const addNewBook= async (req,res) => { 
    try{
        const newBookFormData = req.body;
        const newCreatedBook = await Book.create(newBookFormData);
        if(newCreatedBook){
            res.status(201).json({
                success:true,
                message:"Book created successfully",
                data:newCreatedBook
            })
        }


    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in creating book",
            data:error
        })
    }

}


const updateBook = async (req,res) => {
    try {
        const bookId = req.params.id;
        const updateBookData = req.body;
        const updateBook =await Book.findByIdAndUpdate(bookId,updateBookData,{new:true});
        if(!updateBook){
            res.status(404).json({
                success:false,
                message:"No book found",
                
            })
        }
    else{ res.status(200).json({
            success:true,
            message:"Book updated successfully",
            data:updateBook
        })}

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error in updating books",
            data:error
        })
        
    }

}


const deleteBook= async (req,res) => {
    try {


        const bookId = req.params.id;
        const deleteBook = await Book.findByIdAndDelete(bookId);
        
        if(!deleteBook){
            res.status(404).json({
                success:false,
                message:"No book found",
                
            })

        }
        else{
            res.status(200).json({
                success:true,
                message:"Book deleted successfully",
                data:deleteBook
            })

        }
        

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Error in deleting book",
            data:error
        })
    }

}


module.exports = {getAllBooks,getSingleBook,addNewBook,updateBook,deleteBook}
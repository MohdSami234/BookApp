const Book = require("../models/Book");
const bookService  = require("../services/bookService")
const { body, validationResult } = require('express-validator');
const mongoose = require('mongoose');
 
exports.createBook =  async(req, res) => {
    var errors =validationResult(req);
    if (errors.errors.length>0) {
        return res.send({ status_code: 400, status: 'failure', message: errors })
    } else {
        try {
            var inputData = req.body;
            let createData = {
                ...inputData
            };
            let book_details = await bookService.createBook(createData);
            res.send({ status_code: 200, status: 'success', message: 'Book created',book_details });
            
           
        } catch (err) {
            res.send({ status_code: 500, status: 'failure', message: err.stack });
        }
    }
}

exports.updateBook =  async(req, res) => {
        try {
            const bookId = req.params.id; 
            const inputData = req.body; 
            let BookDetails = await bookService.findByBookId(bookId);
             if(!BookDetails){
               return res.send({status_code:204,status:"success",message:"No Book Found to update"})
            }
            else{
             
                 var updateBookdata = {
                ...inputData
            }
        
            let book_details = await bookService.updateBook(bookId,updateBookdata);
            return res.send({ status_code: 200, status: 'success', message: 'Book details updated',book_details });
            }   
        }
           
           catch (err) {
            res.json({ status_code: 500, status: 'failure', message: err.stack });
        }
    }


exports.getBookDetails = async (req, res) => {
        try {
            const bookId = req.params.id; 
             let getBookDetailsRes = await bookService.findByBookId(bookId);
            if(getBookDetailsRes){
               res.send({ status_code: 200, status: 'success', message: 'Book Details', getBookDetailsRes });
            }else{
                res.send({ status_code: 204, status: 'success', message: 'No Book Found' });
            }
            
        } catch (err) {
            res.send({ status_code: 500, status: 'failure', message: err.stack });
        }
    
}

exports.getBooklist = async (req,res)=>{
    try {
        var inputData = req.query
        let getBookDetailsRes = await bookService.findBooklist();
        if(getBookDetailsRes.length>0){
          res.send({ status_code: 200, status: 'success', message: 'Book Details', getBookDetailsRes }); 
        }else{
            res.send({ status_code: 204, status: 'success', message: 'No Book Found' });  
        }
    } catch (err) {
        res.send({ status_code: 500, status: 'failure', message: err.stack });
    }
}

exports.DeleteBook = async (req, res) => {
    try {
        const BookId = req.params.id; 
        const deletedBook = await bookService.DeleteBook(BookId);
        if(deletedBook){
          res.send({ status_code: 200, status: 'success', message: 'Book Deleted' });   
        }else{
         res.send({ status_code: 204, status: 'success', message: ' Book not found to delete' });  
        }
       
    } catch (err) {
        res.send({ status_code: 500, status: 'failure', message: err.stack });
    }

}


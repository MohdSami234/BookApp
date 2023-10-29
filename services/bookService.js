const { query } = require("express");
const Book = require("../models/Book");

exports.createBook = async (data) => {
    return await Book.create(data);
}

exports.findByBookId = async (id) => {
    return await Book.findById(id).lean()
}
exports.DeleteBook = async(id)=>{
    return await Book.findByIdAndDelete(id);
}

exports.updateBook = async (id, data) => {
    return await Book.findByIdAndUpdate(
        id, { $set: data }, { safe: true, upsert: false, new: true });
  }

exports.findBooklist  = async()=>{
    return await Book.find().lean();
}
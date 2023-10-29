const mongoose = require('mongoose');
 
const BookSchema = new mongoose.Schema({
	title: { type: String,  trim: true,required: true },
	author: { type: String,required: true },
    summary: { type: String,require:true }, 
	generic_date: { type: Date, default: new Date().toISOString() }
});

BookSchema.index({
	 
	"title": "text",
  }, {
	"default_language": "en",
	"language_override": "en"
  });


  module.exports = mongoose.model('Book', BookSchema);
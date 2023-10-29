const mongoose = require('mongoose');
exports.dbconnection = ()=>{
    mongoose.connect("mongodb+srv://msami9503:N4xWvPbsnLP0wAPV@cluster0.t2e5hfu.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  }); 
 
}
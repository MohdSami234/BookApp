const bookController = require("../controllers/bookController");

const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const{ validatePostRequest} = require('../middlewares/validations');


router.get("/getBooklist",bookController.getBooklist);
router.get("/getBookDetails/:id",bookController.getBookDetails);
router.post("/createBook",validatePostRequest,bookController.createBook);
router.put('/updateBook/:id',bookController.updateBook);
router.delete('/DeleteBook/:id',bookController.DeleteBook);

module.exports = router
 
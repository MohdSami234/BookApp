const { body, validationResult } = require('express-validator');

const validatePostRequest = [
    body('title').notEmpty().withMessage('title can not be empty'),
    body('author').notEmpty().withMessage('author can not be empty'),
    body('summary').notEmpty().withMessage('summary can not be empty'), 

  ];

 

  module.exports ={ validatePostRequest};

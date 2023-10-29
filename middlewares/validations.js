const { body, validationResult } = require('express-validator');

const validatePostRequest = [
    body('title').notEmpty().withMessage('firstName can not be empty'),
    body('author').notEmpty().withMessage('lastName can not be empty'),
    body('summary').notEmpty().withMessage('gender can not be empty'), 

  ];

 

  module.exports ={ validatePostRequest};

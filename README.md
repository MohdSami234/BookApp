# BookApp
1. Apis Endpoints
baseURl - https://bookapp1-7d52.onrender.com
     Api Endpoints                                          HTTP Method
   /createBook(to create a book) -                           POST
   /updateBook/:id(to update date using ID)-                 PUT
   /getBookDetails/:id(to get details of one book using Id)- GET
   /getBooklist(to get list of all books)-                   GET
   /DeleteBook/:id(to dalete a book using id)-               DELETE


2. start Application on local
build command - npm i
start command - node server.js / nodemon start

3. Assumptions
  i have used express-validator library to validate inputs

4.deployment
  - i have deployed on Application on render.detail explaination on video

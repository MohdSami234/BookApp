# BookApp
1. Apis Endpoints
baseURl -(https://bookapp2-9lug.onrender.com)
     Api Endpoints                                             
   /createBook(to create a book --"POST METHOD") -                            
   /updateBook/:id(to update date using ID--"PUT METHOD")-                  
   /getBookDetails/:id(to get details of one book using Id ---  "GET METHOD")-  
   /getBooklist(to get list of all books  ----   "GET METHOD")-                    
   /DeleteBook/:id(to dalete a book using id ---- "DELETE METHOD")-                


2. start Application on local
build command - npm i
start command - node server.js / nodemon start

3. Assumptions
  i have used express-validator library to validate inputs

4.deployment
  - i have deployed on Application on render.
  - i have connected github master repo with render
  - then i choose web service for deployment
  - then i have build command npm i and start command npm start. then click on build
  - after that code deployed successfully.

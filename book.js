// 'use strict';
// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     status: String,
//   });
  
//   const book = mongoose.model('books', bookSchema);
  
//   async function seedData(){
//     const book1 = new book({
//       title: 'The Hobbit',
//       description: 'A book about a hobbit',
//       status: 'read'
//     });
//     const book2 = new book({
//       title: 'The Lord of the Rings',
//       description: 'A book about a ring',
//       status: 'read'
//     });
//     const book3 = new book({
//       title: 'The Silmarillion',
//       description: 'A book about a silmarillion',
//       status: 'read'
//     });
//     await book1.save();
//     await book2.save();
//     await book3.save();
    
//   }
// // http://localhost:3010/book
//   function getBookHandler(req,res) {
//     book.find({},(err,result)=>{
//       if(err){
//         res.send(err);
//       }else{
//         // res.send(result);
//         res.json(result);

//       }
//     });
//     }
    // async function bookHandler(req, res) {
    //   // console.log(req.body);
    //   const {title,description,status} = req.body;
    //   await book.create({
    //     title: title,
    //     description: description,
    //     status: status
    //   });
    
    //   book.find({}, (err, result) => {
    //     if (err) {
    //       console.log(err);
    //     }
    //     else {
    //       res.json(result);
    //     }
    //   });
    // }
    
   
  // seedData();
  
  
  
  // module.exports = getBookHandler ;
  // module.exports = bookHandler ;
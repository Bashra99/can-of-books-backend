'use strict';

const express = require('express');
const cors = require('cors');
const { response } = require('express');
require('dotenv').config();
const mongoose = require('mongoose'); // 0 - import mongoose


const app = express();
app.use(express.json());
app.use(cors());
//IP : http://localhost:PORT

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://work:1234@Cluster0-shard-00-00.regzjy1.mongodb.net:27017,ac-paijrcr-shard-00-01.regzjy1.mongodb.net:27017,ac-paijrcr-shard-00-02.regzjy1.mongodb.net:27017/?ssl=true&replicaSet=atlas-d6hm1m-shard-0&authSource=admin&retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect('mongodb://localhost:27017/bookapp', {useNewUrlParser: true, useUnifiedTopology: true});
// let getBookHandler = require("./book");

const bookSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
});

const book = mongoose.model('books', bookSchema);

async function seedData(){
  const book1 = new book({
    title: 'The Hobbit',
    description: 'A book about a hobbit',
    status: 'read'
  });
  const book2 = new book({
    title: 'The Lord of the Rings',
    description: 'A book about a ring',
    status: 'read'
  });
  const book3 = new book({
    title: 'The Silmarillion',
    description: 'A book about a silmarillion',
    status: 'read'
  });
  await book1.save();
  await book2.save();
  await book3.save();
  
}
// http://localhost:3010/book
function getBookHandler(req,res) {
  book.find({},(err,result)=>{
    if(err){
      res.send(err);
    }else{
      // res.send(result);
      res.json(result);

    }
  });
  }

// seedData();
// Routes
app.get("/books", getBookHandler  );
// app.post("/books", bookHandler);
app.delete('/books/:id',deleteBookHandler);
app.get("/", homeHandler);
app.get("/test", (req, res) => {
  res.send("test request received");
});
app.get("*",defualtHandler);

// http://localhost:3010/
function homeHandler(req,res) {
  res.send("Hi from the home route");
}
// http://localhost:3010/*
function defualtHandler(req,res) {
  res.send("Sorry, Page not found");
}
 async function bookHandler(req, res) {
  console.log(req.body);
  // const title = req.body.title;
  // const description = req.body.description;
  // const status = req.body.status;
  const {title,description,status} = req.body;
  await book.create({
    title: title,
    description: description,
    status: status
  });
  book.find({},(err,result)=>{
    if (err) {
      console.log(err);
    }
    else {
      res.json(result);
    }
  });
}
app.post('/books', bookHandler);


function deleteBookHandler(req,res) { 
  const bookId = req.params.id; 
  book.deleteOne({_id:bookId},(err,result)=>{
      
      // book.find({},(err,result)=>{ 
      //     if(err)
      //     {
      //         console.log(err);
      //     }
      //     else
      //     {
      //         // console.log(result);
      //         res.json(result);
      //     }
      // })

      book.find({},(err,result)=>{
        if(err){
          res.send(err);
        }else{
          // res.send(result);
          res.json(result);
        }
      }
      );
  })
}
app.put('/books/:id',updateBookHandler);

function updateBookHandler(req, res){
  const id = req.params.id;
  const {title,description,status} = req.body;

  book.findByIdAndUpdate(id, {title,description,status}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      book.find({},(err,result)=>{ 
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
        }
    })
    }
  })

}
 
  




app.listen(PORT, () => console.log(`listening on ${PORT}`));

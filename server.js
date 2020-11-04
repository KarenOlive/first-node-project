const express = require('express');
const mongoose = require('mongoose');
const Book = require('./models/Book.model');
const server = express();
const port = 8080;
const hostname = 'localhost';

server.get('/', (req, res)=>{
    res.json(
        {
            userName: "Olive",
            password: "1234456",
            email: "olive@gmail.com"
        }
    )
});

server.get('/data', (req, res)=>{
    res.json(
        { data: "Product Data" }
    )
});

server.listen(port, hostname, (err)=>{
    if (err){
        console.error('404');
    }
    console.log(`Server is running at http://${hostname}:${port}/`);

})

mongoose.connect('mongodb://localhost/core4',{ useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error',function(error){
    console.log('connection error');
});

db.once('open',function(){
    console.log('database connected');
});

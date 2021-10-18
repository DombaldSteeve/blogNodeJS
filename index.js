// IMPORT
import express from 'express';
import path from 'path';
import ejs from 'ejs';

import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/blogdb' , {useNewUrlParser:true});


//DECLARATION
const port = 3001;
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
})

app.get('/about', (req,res) => {
    res.render('about')
})
app.get('/contact', (req,res) => {
    res.render('contact')
})
app.get('/', (req,res) => {
    res.render('index')
})
app.get('/post', (req,res) => {
    res.render('post')
})
app.get('/post/new', (req,res) => {
    res.render('create');
})

app.post('/posts/store', async (req,res) =>{
    console.log(req.body);
    console.log(req.body.title);
    console.log(req.body.content);

    res.redirect('/');
})

// IMPORT
import express from 'express';
import path from 'path';
import ejs from 'ejs';
import crypto from 'crypto';

import mongoose from 'mongoose';
import BlogPost from './models/blogPost.js';
import User from './models/register.js';

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

// app.get('/post', (req,res) => {
//     res.render('post')
// })
app.get('/post/new', (req,res) => {
    res.render('create');
})

app.post('/posts/store', (req, res)=>{
    BlogPost.create({
        title: req.body.title,
        body: req.body.body,
    }, (error, blogspost)=>{console.log(error, blogspost)});
    res.redirect('/');
})

app.get('/', async (req,res) => {
    const blogposts = await BlogPost.find({ });
    res.render('index', {blogposts});
})

app.get('/post/:id', async (req,res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post' , {blogpost});
})

app.get('/register', (req,res) => {
    res.render('enregistrement');
});


app.post('/user/login',  (req,res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
    });
    user.save(); 
})



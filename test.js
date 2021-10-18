

import blogPost from './models/BlogPost.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/blogdb' , {useNewUrlParser:true});

blogPost.create({
    title: ' Le titre du Test',
    body: ' Nous avons donc pu faire un test mongodb via mongoose'
}, (error,blogpost) => {console.log(error,blogpost)});



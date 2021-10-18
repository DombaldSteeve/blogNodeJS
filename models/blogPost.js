import mongoose from 'mongoose';
//import { Schema } from 'mongoose';
mongoose.connect('mongodb://localhost:27017/blogdb', {useNewUrlParser:true});

// Model puis intentiation
const blogPostSchema = new mongoose.Schema({
    title: String,
    body: String
  });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost
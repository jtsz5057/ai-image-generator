import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';


// Loads environment variables from a .env file into process.env
dotenv.config();

// creates an instance of the Express Router
const router = express.Router();

// Configures cloudinary with API credentials from enviroment variables
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// defines a route to handle GET requests for all posts
router.route('/').get(async(req, res) => {
    try {
        // Finds all posts in the database
        const posts = await Post.find({})

        // sends a success response with the retrieved posts
        res.status(200).json({ success: true, data: posts })
        
    } catch (error) {
        // sends an error response if there is an error fetching posts
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' })
        
    }

})

// defines a route to handle POST requests to create a new post
router.route('/').post(async(req, res) => {
   try {
    // destructures data from the request body
    const { name, prompt, photo } = req.body;

    // uploads the photo to Cloudinary and retrieves the URL
    const photoUrl = await cloudinary.uploader.upload(photo);

    // creates a new post using the Post model and the uploaded photo URL
    const newPost = await Post.create({
        name, 
        prompt,
        photo: photoUrl.url,
    })

    // sends a success response with the newly created post
    res.status(201).json({ success: true, data: newPost });
    
   } catch (error) {

    // sends an error response if there is an error creating the post
    res.status(500).json({ success: false, message: 'Unable to create a post, please try again' })
    
   }
    
})


export default router;
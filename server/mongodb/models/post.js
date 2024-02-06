import mongoose from 'mongoose';

// Define the schema for the Post model
const Post = new mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true },
});

// Compile the schema into a Mongoose model for the 'Post' collection
const PostSchema = mongoose.model('Post', Post);

export default PostSchema;
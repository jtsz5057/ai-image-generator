import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

router.route('/').get((req, res) => {
    res.send('Hello from DALL-E!')
})

// Define a route for handling HTTP POST requests to the root path '/'
router.route('/').post(async (req, res) => {
    try {
        // Destructure the 'prompt' property from the request body
        const { prompt } = req.body;

        // Call the 'createImage' method of the 'openai' instance to generate an image based on the provided prompt
        const aiResponse = await openai.images.generate({
            prompt,
            n:1, //number of images to generate (1 image)
            size: '1024x1024', // size of the generated image
            response_format: 'b64_json', // specify the response format as base64 encoded JSOn 
        });

        // Extract the base64 encoded image data from the API response
        const image = aiResponse.data[0].b64_json;

        // Send a JSON response containing the generated image data
        res.status(200).json({ photo: image });

    } catch (error) {
        // If an error occurs during image generation or processing, log the error and send a 500 Internal Server Error response
        console.log(error);
        res.status(500).send(error?.response.data.error.message)

    }
})


export default router;
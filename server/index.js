import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());

// Configure Express.js to parse incoming requests with JSON payloads
// and set the maximum request body size to 50 megabytes
app.use(express.json({ limit: '50mb' }))

app.get('/', async (req,res) => {
    res.send('Hello from DALL-E')
})


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080 '))
    } catch (error) {
        console.log(error);
    }
}


startServer();
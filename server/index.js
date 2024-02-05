import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

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
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080 '))
}

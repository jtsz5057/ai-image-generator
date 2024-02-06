import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloundinary } from 'cloudinary';

import Post from '../mongodb/models/post.js';

dotenv.config();

const router = express.Router();


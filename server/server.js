import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import mongoose from 'mongoose';
import images from './images.js';

const app = express();
app.use(cors());
app.use(json());

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log("MongoDB connected"))
  .catch(err=>console.error(err));

const formSchema = new mongoose.Schema({
  name: String,
  message: String,
}, { timestamps: true });

const FormEntry = mongoose.model('FormEntry', formSchema);

// Example route (API health check)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.post('/api/form', async (req, res) => {
  try {
    const newEntry = new FormEntry(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Form entry saved successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving form entry', error: err.message });
  }
});

app.get('/api/form', async (req, res) => {
  try {
      const entries = await FormEntry.find();
      res.json(entries);
    } 
    catch (err) {
      res.status(500).json({ message: "Error fetching form entries." });
    }
});

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get('/api/images', async (req, res) => {
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
  
      max_results: 100,
    });

    console.log('Cloudinary result:', result);
    // Extract URLs from resources
    const images = result.resources.map((file) => file.secure_url);

    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});


// TODO: Add more routes here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

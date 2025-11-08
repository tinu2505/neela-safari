import express from 'express';
import fetch from 'node-fetch';
const router = express.Router();

const UPLOADCARE_PUBLIC_KEY = '1203ae650b6f89e1fbe2'; // For uploads (not required here)
const UPLOADCARE_SECRET_KEY = '6ecbdb296e95b1d1d255'; // Required for file listing

router.get('/images', async (req, res) => {
    res.set('Cache-Control', 'no-store');
  const apiUrl = 'https://api.uploadcare.com/files/?stored=true&limit=100';

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/vnd.uploadcare-v0.5+json',
        'Authorization': `Uploadcare.Simple ${UPLOADCARE_PUBLIC_KEY}:${UPLOADCARE_SECRET_KEY}`,
      },
    });

    const data = await response.json();
    
    const images = (data.results || []).filter(file =>
      file.is_image && file.cdn_url
    );
    console.log('Data from Uploadcare:', data);
    console.log('Filtered images:', images);
    console.log('API return:', data.results);
    console.log('Number of images fetched:', images.length);
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images from Uploadcare' });
  }
});

export default router;
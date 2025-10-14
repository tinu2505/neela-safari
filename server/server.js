import dotenv from 'dotenv';
dotenv.config();
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors({origin: function(origin, callback) 
  {
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) !== -1){
      return callback(null, true);
    }else{
      return callback(new Error('Not allowed by CORS'));
    }
  },
credentials: true
}));
app.use(json());

const allowedOrigins = [
  'https://neela-safari.vercel.app',
  'http://localhost:5173'
];

connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=>console.log("MongoDB co}nnected"))
  .catch(err=>console.error(err));

// Example route (API health check)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

const formSchema = new mongoose.Schema({
  name: String,
  message: String,
}, { timestamps: true });

const FormEntry = mongoose.model('FormEntry', formSchema);

app.post('/api/form', async (req, res) => {
  try{
    const newEntry = new FormEntry(req.body);
    await newEntry.save();
    res.status(201).json({message: 'Form entry saved successfully'});
  }
  catch(err){
    res.status(500).json({message: 'Error saving form entry', error: err.message});
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
 
// TODO: Add more routes here...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

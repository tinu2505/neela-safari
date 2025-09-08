import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { config } from "dotenv";
config();
const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.get("/", (_req, res) => res.send("API is running 🚀"));
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
})
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map
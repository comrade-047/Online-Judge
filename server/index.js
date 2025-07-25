import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/dbConfig.js";


import authRoutes from "./routes/authRoutes.js"
import problemRoutes from "./routes/problemRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import judgeRoutes from './routes/judgeRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable Cross-Origin Resource Sharing for all routes
app.use(cors());

// Parse URL-encoded data with extended syntax
app.use(express.urlencoded({ extended: true }));

// Parse JSON payloads
app.use(express.json());


app.get('/', (request, response)=>{
    response.send('Server is in healthy state');
});

connectDb();

app.use('/api/auth',authRoutes);
app.use('/api/problems', problemRoutes);
app.use('/api/:username',userRoutes);
app.use('/api/judge',judgeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
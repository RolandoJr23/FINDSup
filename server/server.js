import express from 'express';
import 'dotenv/config';
import connectDB from './database/db.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))

app.use('/user', userRoutes)

// http://localhost:3000/user/signup

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is Running at port ${PORT}`)
})
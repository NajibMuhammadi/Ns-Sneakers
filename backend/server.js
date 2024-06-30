import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

import userLoginRoute from './routes/userLoginRoute.js';

const app = express();
const PORT = process.env.PORT || 8085;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/ns-sneakers', userLoginRoute);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();

import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js'
import errorHandler from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 8085;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/ns-sneakers/auth', authRoutes);
app.use('/ns-sneakers/admin', adminRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});

app.use(errorHandler);
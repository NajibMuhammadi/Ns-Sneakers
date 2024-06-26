import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import userLoginRoute from './routes/userLoginRoute.js';

const app = express();
const PORT = process.env.PORT || 8085;

app.use(cors())
app.use(express.json());

app.use('/ns-sneakers', userLoginRoute);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8085;

app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
// backend/index.js
import express from 'express';
import cors from 'cors';
import authRoute from './routes/authRoutes.js'; 
import pool from './config/db.js';

const app = express();
const PORT = 4000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});


app.use('/auth', authRoute)

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

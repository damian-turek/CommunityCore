import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db'

const app = express()
const PORT = process.env.PORT

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Błąd serwera' });
    }
});

app.listen(PORT, () => {
    console.log(`Server działa na porcie ${PORT}`);
});

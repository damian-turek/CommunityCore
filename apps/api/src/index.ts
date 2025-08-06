import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import authRouter from './auth/auth.routes'

const app = express()
const PORT = process.env.PORT

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(express.json());

app.use('/auth', authRouter)

app.listen(PORT, () => {
    console.log(`Server working on port: ${PORT}`);
});
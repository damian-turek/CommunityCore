import { Pool } from 'pg';

const pool = new Pool({
    user: process.env.PG_USER || 'developer',
    host: process.env.PG_HOST || 'localhost',
    database: process.env.PG_DATABASE || 'communitycore_db',
    password: process.env.PG_PASSWORD || 'communitycorepassword',
    port: Number(process.env.PG_PORT) || 5432,
});

export default pool;

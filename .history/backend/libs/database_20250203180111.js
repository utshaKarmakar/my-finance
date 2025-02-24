import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const {Client} = pg;

export const cli = new Pool({
    connectionString: process.env.DATABASE_URI,
});
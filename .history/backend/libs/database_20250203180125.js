import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const {Client} = pg;

export const clie = new Pool({
    connectionString: process.env.DATABASE_URI,
});
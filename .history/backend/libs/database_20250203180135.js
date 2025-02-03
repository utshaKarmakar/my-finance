import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const {Client} = pg;

export const client = new Client({
    connectionString: process.env.DATABASE_URI,
});
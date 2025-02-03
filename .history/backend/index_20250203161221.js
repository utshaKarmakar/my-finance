import cors from 'cors';
import express from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api-v1", routes)
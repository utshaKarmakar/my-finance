import express from 'express';
import authRoutes from './authRoutes.js';
import accountRoutes from './accountRoutes.js';
import transactionRoutes from './transactionRoutes.js';
import userRoutes from './userRoutes.js';


const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/auth", authRoutes);



export default router;
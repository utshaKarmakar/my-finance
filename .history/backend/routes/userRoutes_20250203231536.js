import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.get("/", authMiddleware, getUser);
router.put("/change-password", authMiddleware, changePassword);
router.put("/:id", authMiddleware, getUser);



export default router;
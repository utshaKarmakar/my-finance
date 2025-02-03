import express from 'express';
import authMiddleware from '../middleware/authMiddleware';


const router = express.Router();

router.get("/", authMiddleware, getUser);
router.put("/change-password", authMiddleware, changePassword);
router.put("/", authMiddleware, getUser);



export default router;
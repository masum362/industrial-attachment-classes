import express from 'express';
import { loginUser,registerUser } from '../controllers/auth.controller.js';
const router = express.Router();

import { validateBody,registerUserSchema } from '../middlewares/validation.js';

router.post("/register",validateBody(registerUserSchema),registerUser);
router.post("/login",loginUser);    


export default router;
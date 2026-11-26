import express from 'express';
import { loginUser,registerUser } from '../controllers/auth.controller.js';
const router = express.Router();

import { validateBody,registerUserSchema, loginUserSchema } from '../middlewares/validation.js';

router.post("/register",validateBody(registerUserSchema),registerUser);
router.post("/login",validateBody(loginUserSchema),loginUser);    


export default router;
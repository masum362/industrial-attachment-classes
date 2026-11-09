import express from "express";
import {getAllUsers, getUser} from '../controllers/user.controller.js'

const router = express.Router();

router.get("/users",getAllUsers);
router.get("/user", getUser);


export default router
import express from "express";

const router = express.Router();



router.post("/register", (req, res) => {
  return res.json({ message: "user successfully registered" });
});




export default router
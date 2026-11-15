import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DbConnection from "./config/db.connection.js";
import router from "./routes/router.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)

const PORT = process.env.PORT || 5000;

DbConnection(process.env.MONGODB_URI as string)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
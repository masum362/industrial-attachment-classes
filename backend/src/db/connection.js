import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import { MongoClient } from "mongodb";

import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.DB_URI);

try {
  await client.connect();
  console.log("MongoDB connected");
} catch (err) {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
}

export const db = client.db("todo_db");
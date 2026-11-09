import express from "express";
import data from "../data.json" with { type: "json" };
import app from "./app.js";


const PORT = 3000;
app.listen(PORT, () => {
  console.log("server started successfully");
});

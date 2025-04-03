// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db";

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv")



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/",(req,res)=>{
    res.send("API RUNNING...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const nodemon = require("nodemon");
const rootroute = require("./routes/rootroute");
const moviesroute = require("./routes/moviesroute")
const connectDB = require("./config/db")

const app = express();
const PORT = process.env.PORT || 6000 ||8080;
connectDB();

app.use("/",rootroute);

app.use("/movies",moviesroute);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white);
})
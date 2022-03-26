const express = require("express");
const bodyParser = require("body-parser");
const corse = require("cors");

const app = express();
const port= process.env.PORT || 4200
const WorstRoutes = require("./routes/index")

const connectDB = require("./config/db");
require('dotenv').config()

// DB Connection
connectDB();

// Middleware
app.use(corse());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Securing API
// app.use(authJwt());
// app.use(autherror)
app.use("/api", WorstRoutes);

app.listen(port, () => {
  console.log(`Server Running on PORT ${port}`);
});
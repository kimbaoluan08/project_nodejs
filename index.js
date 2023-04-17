const express = require('express');
const { connectDB } = require('../project_nodejs/src/configs/db.config.js');
const usersRouter = require("../project_nodejs/src/routes/User.js");
const app = express();
const port = 3000;

// Connect to DB
connectDB()

// Route
app.use("/", usersRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
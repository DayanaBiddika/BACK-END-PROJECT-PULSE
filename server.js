// import express
const express = require("express");

// create express obj application
const app = express();

// import dotenv
require("dotenv").config();

// import sequelize
const sequelize = require("./DB/db.config");




// path middleware for superUser
app.use("/superAdmin-api", superAdminApp);

const PORT=process.env.PORT||2828

// check sequelize connection
sequelize.authenticate()
  .then(() => console.log("DB connected successfully..."))
  .catch((err) => console.log("DB connection failed..."));

// sync the sequelize
sequelize.sync({});

// body parser
app.use(express.json());


//path middleware for user
app.use("/user-api", userApp);


// invalid path
app.use("*", (req, res) => {
  res.send({ message: "Invalid path" });
});
// error handling middleware
app.use((err, req, res, next) => {
  res.send({ message: err.message });
});

//export the app
module.exports=app;

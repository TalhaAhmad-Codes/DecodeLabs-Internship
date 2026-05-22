// ? MongoDb Connection Setup

// * Initialize express and mongoose
const express = require("express");
const mongoose = require("mongoose");

// * Importing routes
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");

const app = express();

app.use(express.json());

// * Adding connection for MongoDB
mongoose
  .connect(
    "mongodb+srv://school_db:school92@cluster0.xucqtb0.mongodb.net/schoolDB?retryWrites=true&w=majority",
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

// * Using routes
app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);

// * Setting up the port
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

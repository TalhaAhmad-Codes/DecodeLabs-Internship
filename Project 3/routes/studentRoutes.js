const express = require("express");
const router = express.Router();

const connectDB = require("../database/db");

// * Add a new student
router.post("/", async (req, res) => {
  const db = await connectDB();

  const { rollNumber, name, age, teacherId } = req.body;

  if (!rollNumber || !name || !age || !teacherId) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  await db.run(
    `INSERT INTO students (rollNumber, name, age, teacherId)
         VALUES (?, ?, ?, ?)`,
    [rollNumber, name, age, teacherId],
  );

  res.status(201).json({
    message: "Student added successfully",
  });
});

// * Get all students
router.get("/", async (req, res) => {
  const db = await connectDB();

  const students = await db.all(`SELECT * FROM students`);

  res.json(students);
});

module.exports = router;

const express = require("express");
const router = express.Router();

const connectDB = require("../database/db");

// * Add a new teacher
router.post("/", async (req, res) => {
  const db = await connectDB();

  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }

  await db.run(
    `INSERT INTO teachers (name)
         VALUES (?)`,
    [name],
  );

  res.status(201).json({
    message: "Teacher added successfully",
  });
});

// * Get all teachers
router.get("/", async (req, res) => {
  const db = await connectDB();

  const teachers = await db.all(`SELECT * FROM teachers`);

  res.json(teachers);
});

// * Get all teachers with their assigned students
router.get("/assigned-students", async (req, res) => {
  const db = await connectDB();

  // * Used JOIN to fetch teachers along with their students
  const teachers = await db.all(`
        SELECT teachers.name AS teacherName,
              students.name AS studentName
        FROM teachers
        JOIN students
        ON teachers.id = students.teacherId
    `);

  res.json(teachers);
});

module.exports = router;

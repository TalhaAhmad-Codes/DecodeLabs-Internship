const express = require("express");
const router = express.Router();

const Teacher = require("../models/Teacher");

// ? Add a new teacher
router.post("/", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);

    await teacher.save();

    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// ? Get all teachers with their students
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find().populate("students");

    res.json(teachers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;

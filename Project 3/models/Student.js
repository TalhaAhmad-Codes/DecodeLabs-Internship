const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  rollNumber: {
    type: Number,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  teacherId: {
    type: Number, // * Adding reference to the Teacher model
    required: true,
    ref: "Teacher",
  },
});

module.exports = mongoose.model("Student", studentSchema);

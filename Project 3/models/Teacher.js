const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  // students: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId, // * Adding reference to the Student model
  //     ref: "Student",
  //   },
  // ],
});

module.exports = mongoose.model("Teacher", teacherSchema);

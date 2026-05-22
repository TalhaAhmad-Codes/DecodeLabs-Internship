// ? Setting up Express.js server
const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;

// * An array containing all the notes (in-memory storage)
let notes = [];

// * Default message
app.get("/", (req, res) => {
  res.send("Backend API is running");
});

// ? API: Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// ? API: Add a new note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  // * If both title and content are not provided, return 400 response code
  if (!title || !content) {
    return res.status(400).json({
      message: "Title and content are required",
    });
  }

  // * If the title and content are provided, create a new note and add it to the notes array
  const newNote = {
    id: notes.length + 1,
    title,
    content,
  };

  // * Add the new note to the notes array
  notes.push(newNote);

  // * Return a success response
  res.status(201).json({
    message: "Note added successfully",
    note: newNote,
  });
});

// ? Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

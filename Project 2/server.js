let notes = []

const express = require("express")

const app = express()

app.use(express.json());

/* Routes */
app.get("/", (req, res) => {
    res.send("Hello, World!")
})

app.get("/notes", (req, res) => {
    res.json(notes)
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
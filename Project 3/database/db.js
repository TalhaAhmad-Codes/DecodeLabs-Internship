const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

async function connectDB() {
  const db = await open({
    filename: "./school.db",
    driver: sqlite3.Database,
  });

  // * Create students table
  await db.exec(`
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            rollNumber INTEGER UNIQUE,
            name TEXT,
            age INTEGER,
            teacherId INTEGER,
            FOREIGN KEY(teacherId) REFERENCES teachers(id)
        )
    `);

  // * Create teachers table
  await db.exec(`
        CREATE TABLE IF NOT EXISTS teachers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT
        )
    `);

  return db;
}

module.exports = connectDB;

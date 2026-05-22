
---

# Project 3: Creating a Database and connect with Backend

---

## Description

This project demonstrates the connection between **Backend** and **Database**. I used two schemas:

**Student**
| Name | Type | Nullable |
|------|------|----------|
| rollNumber | Number | No |
| name | String | No |
| age | Number | No |
> **Link:** http://localhost:3000/students

**Teacher**
| Name | Type | Nullable |
|------|------|----------|
| Name | String | No |
| Students | Ref | N/A |
> **Link:** http://localhost:3000/teachers

## How it Run?

To run it, follow these steps:

- **Step 1:** Start the server by running this command in terminal `npm start`.
- **Step 2:** Open **Postman** and paste this link to test the API `http://localhost:3000/`.

---

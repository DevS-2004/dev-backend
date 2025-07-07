# 🛠️ Dev Backend

This is the backend service for a full-stack application built with **Node.js**, **Express.js**, and **MongoDB**. It follows a modular and scalable folder structure using MVC architecture principles.

---

## 📁 Project Structure

dev-backend/
│
├── node_modules/ # Installed dependencies
├── public/ # Static assets (if any)
├── src/
│ ├── controllers/ # Route controller logic
│ ├── db/ # DB connection setup (e.g., MongoDB or other)
│ ├── middlewares/ # Custom Express middlewares
│ ├── models/ # Mongoose or ORM models
│ ├── routes/ # All API routes
│ ├── utils/ # Utility functions/helpers
│ ├── app.js # Express app setup
│ ├── constants.js # Constant values used across app
│ └── index.js # Server entry point
│
├── .env # Environment variables
├── .gitignore # Git ignored files
├── .prettierrc # Code formatter config
├── .prettierignore # Files ignored by Prettier
├── notes.md # Project notes or planning
├── package.json # NPM dependencies and scripts
└── package-lock.json # Lock file for dependency versions

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (or any DB set in `src/db`)
- **Mongoose** (assumed based on structure)
- **Prettier** for code formatting
- **Dotenv** for managing environment variables

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/DevS-2004/dev-backend.git
cd dev-backend

npm install

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

📌 Available Scripts
npm start - Start the server

npm run dev - Start server in development mode (if using nodemon)

npm run lint - Format code using Prettier (if configured)

📁 Example API Folder Roles
controllers/: Handles request logic

models/: Mongoose models for MongoDB collections

routes/: API endpoint definitions

middlewares/: Auth, error handling, etc.

utils/: Reusable helpers like token generation or input validation

🧑‍💻 Author
DevS-2004
GitHub Profile
```

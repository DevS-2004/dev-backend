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

yaml
Copy
Edit

---

## ⚙️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (configured in `src/db`)
- **Mongoose**
- **Prettier** (code formatting)
- **Dotenv** (environment configuration)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DevS-2004/dev-backend.git
cd dev-backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file in the root directory:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
📌 Available Scripts
bash
Copy
Edit
npm start       # Start the server
npm run dev     # Start in development mode (if using nodemon)
npm run lint    # Format code with Prettier (if configured)
📁 Folder Responsibilities
controllers/ – Handles route logic

models/ – Mongoose schemas

routes/ – API endpoints

middlewares/ – Auth, validation, error handlers

utils/ – Helpers like token generation, validators

🧑‍💻 Author
DevS-2004
GitHub Profile

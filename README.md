# 🛠️ Dev Backend

This is the backend service for a full-stack application built with **Node.js**, **Express.js**, and **MongoDB**. It follows a modular and scalable folder structure using MVC architecture principles.

---

## 📁 Project Structure

## 📁 Folder Structure

- **Array/** – Advanced array methods like `map`, `filter`, `reduce`, `forEach`, etc.
- **API/** – Practice with APIs, JSON handling, and AJAX-style requests.
- **DOM/** – DOM selection, manipulation, and interaction with HTML elements.
- **Projects/**
  - **DOM_Projects/** – Mini projects using DOM (e.g., color switcher, circle spot, etc.)
  - **Events/** – Event handling examples (`onclick`, `addEventListener`, etc.)
  - **fun_with_js/** – Explorations like lexical scope, closures, and more.
  - **passwordGen.js** – Standalone JavaScript password generator script.
- **File_Handling _node.js** – Node.js file system usage.
- **notes.txt** / **notes2.txt** – Personal JavaScript notes in text format.
- **Other JS Files** – Individual concepts:
  - `Hoisting.js`, `IIFE.js`, `scope.js`, `prototype.js`, etc.
  - `class.js`, `getter_setter.js`, `optionalChainingOperator.js`, etc.
  - `promise.js`, `import.js`, `highOrderLoops.js`, etc.


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
```

🧑‍💻 Author
DevS-2004
GitHub Profile

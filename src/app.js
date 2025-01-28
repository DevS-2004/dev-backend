import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

//routes import
import userRouter from './routes/user.routes.js';  // we can only give randomName(userRouter) to import if the function is export default

const app = express();

// Middleware setup
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "*", // Allow requests from this origin
        credentials: true,
    })
);

app.use(express.json({ limit: "20kb" })); // Set limit for JSON files
app.use(express.urlencoded({ extended: true, limit: "20kb" })); // Set limit for URL-encoded data
app.use(express.static("public")); // Serve static files from the 'public' directory
app.use(cookieParser());



// routes declaration
app.use("/api/v1/users",userRouter)

export { app }    // be careful



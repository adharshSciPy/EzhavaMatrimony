import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js';
import http from 'http';
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import path from "path";
import adminRouter from "./routes/adminRouter.js"



dotenv.config()

const app = express()
dotenv.config({
    path: './env'
})

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Adjust this to match your frontend URL
        methods: ["GET", "POST"]
    }
});


app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(cookieParser())

// Attach io to the request object
app.use((req, res, next) => {
    req.io = io;
    next();
});

// Store online users
let onlineUsers = {};

// Socket.io Connection
io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    // Add user to online users list
    socket.on("join", (userId) => {
        onlineUsers[userId] = socket.id;
        console.log(`User ${userId} joined`);
    });

    // Send Notification when profile is liked
    socket.on("profile_liked", async ({ senderId, receiverId }) => {
        const message = "Someone liked your profile!";

        // Save to database
        const newNotification = new Notification({
            senderId,
            receiverId,
            message
        });
        await newNotification.save();

        // Send real-time notification if user is online
        if (onlineUsers[receiverId]) {
            io.to(onlineUsers[receiverId]).emit("newNotification", newNotification);
        }
    });

    // Remove user from online users list when disconnected
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        for (const userId in onlineUsers) {
            if (onlineUsers[userId] === socket.id) {
                delete onlineUsers[userId];
                break;
            }
        }
    });
});


app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter)

export { app }
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
const io = new Server(server);


app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(cookieParser())

// Attach io to the request object
app.use((req, res, next) => {
    req.io = io;
    next();
});


// Socket.io connection
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});
app.use("/uploads", express.static(path.join(__dirname, "uploads")))
app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin",adminRouter)

export { app }
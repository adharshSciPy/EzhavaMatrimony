import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js';

dotenv.config()

const app = express()
dotenv.config({
    path: './env'
})


app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(cookieParser())

app.use("/api/v1/user", userRouter);
    

export { app }
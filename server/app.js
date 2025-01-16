import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'


dotenv.config()

const app = express()
dotenv.config({
    path: './env'
})


app.use(express.json())
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(cors())
app.use(cookieParser())



export { app }
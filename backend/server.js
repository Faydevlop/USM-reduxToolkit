import express from "express";
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoute.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js";
import morgan from 'morgan'
// .dot file config
import dotenv from 'dotenv'
import cors from 'cors';
dotenv.config()

import path from 'path'

const port = process.env.PORT || 5000

const app = express()

import connectDB from "./config/db.js";
import cookieParser from 'cookie-parser'


console.log(path.resolve());
app.use(morgan('dev'))
app.use('/public/uploads',express.static(path.join("public/uploads/")))

app.use(cookieParser())
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/user',userRoutes)
app.use('/admin',adminRoutes)

app.get('/',(req,res)=>res.send('server is ready'))
connectDB()

// app.use(notFound)
app.use(errorHandler)

app.listen(port,()=>console.log(`Server is running on http://localhost:${port}`))
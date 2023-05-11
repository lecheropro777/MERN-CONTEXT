import dotenv from 'dotenv'
dotenv.config()

export const mongodb_URI=process.env.mongodb_URI||"mongodb://localhost/MERN2";

export const port=process.env.port||3000;
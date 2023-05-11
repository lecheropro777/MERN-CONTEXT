import mongoose, { mongo } from "mongoose";
import { mongodb_URI } from "./config.js";

export async function conn() {
  try {
    console.log(mongodb_URI)
    const  db= await mongoose.connect(mongodb_URI)
    console.log("conexion establecida: ", db.connection.name)
  } catch(error){
    console.error(error);
  }
}

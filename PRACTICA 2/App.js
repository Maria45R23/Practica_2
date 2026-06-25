import mongoose from "mongoose"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import {datos} from "./Backend/Controller/controller.js";



dotenv.config();
mongoose.connect(process.env.url_bd)
.then(() => console.log("Se ejecuta correctamente")) //
.catch((error) => console.log("NO se ejecuta correctamente")) 

const app = express (); // Creacion de un servidor local 
app.use(cors()); // cors para seguridad el servidor 
app.listen(4000,() => console.log("Corriendo en el puerto 400")) //

datos();
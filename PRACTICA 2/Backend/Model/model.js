
import {Schema, model} from 'mongoose';

const Esqueleto = new Schema({

    Edad_U:Number,
    Genero:String,
    Horas_Diarias: Number, 
    Tipo_Dispositivo: String,
    Genero_Pelicula: String,
    Horas_Pleicula: Number,
    Calificación_Otorgada:Number,
    Completa_Si_No: String
});
export const Tabla = new model ("Tabla de Datos", Esqueleto); 
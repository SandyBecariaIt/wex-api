import express from "express";
import morgan from "morgan";
import cors from "cors";
import './database/database'
import TelegramBot from './plugings/telegram'
import { actudalDate } from "./utils/date";

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
/*Funciones intermedias entre una petición y una respuesta*/
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routers


const getDate = actudalDate();

TelegramBot.sendMessageTo(`Servidor ${process.env.enviroment || 'Producción'} iniciado \nHora : ${getDate}`)

export default app;

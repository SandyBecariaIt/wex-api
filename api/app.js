import express from "express";
import morgan from "morgan";
import cors from "cors";
import movilRouters from "./routers/movil.routers";
// tengo que importar las rutas aquí. 
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares
/*Funciones intermedias entre una petición y una respuesta*/
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

// Routers
app.use(movilRouters);


export default app;

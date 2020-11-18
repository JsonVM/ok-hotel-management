//añadiendo express
const express = require("express");
const cors = require("cors");

//inicializar la libreria
const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Api de Ok-Hotel");
  });


//ruta con su propio endpoint
const rutas_habitacion = require("./routes/habitacion");
app.use(rutas_habitacion);


// asignar el puerto
const port = 3001;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
});
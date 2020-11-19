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


//rutas con sus propios endpoint
const rutas_habitacion = require("./routes/habitacion");
const rutas_cliente = require("./routes/cliente");
const reservas = require("./routes/reserva");
const servicios = require('./routes/servicios');
const reservas_servicios = require('./routes/reservas_servicios');

app.use(rutas_habitacion);
app.use(rutas_cliente);
app.use(reservas);
app.use(servicios);
app.use(reservas_servicios);

// asignar el puerto
const port = 3001;
// Levantar el servidor para escuchar los puertos
app.listen(port, () => {
    console.log(`Escuchando API en http://localhost:${port}`);
});
const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/habitacion");

/**
 * Guardando una habitacion
 */
router.post("/habitacion", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let habitacion = req.body;
      
      // Guardar la habitacion en BD
      _controlador.guardarSuEntidadDeDominio(habitacion).then(respuestaDB => {
        res.send({ ok: true, mensaje: "Habitacion guardada", info: habitacion});
      }).catch(error => {
        res.send(error);
      });
  
      // Responder
    } catch (error) {
        console.log("no se pudo insertar1");
      res.send(error);
    }
});

/**
 * Obtener las habitaciones
 */
router.get("/habitaciones", (req, res) => { 
    _controlador.listarSuEntidadDeDominio().then(respuestaDB => {
        let registros = respuestaDB.rows;
        console.log("registros " + registros.info);
        res.send({ ok: true, info: registros, mensaje: "habitaciones consultadas" });
      }).catch(error => {
        res.send(error);
      });
});

module.exports = router;
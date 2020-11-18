const express = require("express");
const router = express.Router();

const _controlador = require("../controllers/cliente");

/**
 * Guardando un cliente
 */
router.post("/cliente", (req, res) => {
    try {
      //Capturar el body desde la solicitud
      let cliente = req.body;
      
      // Guardar la habitacion en BD
      _controlador.guardarCliente(cliente).then(respuestaDB => {
        res.send({ ok: true, mensaje: "cliente guardado", info: cliente});
      }).catch(error => {
        res.send(error);
      });
  
      // Responder
    } catch (error) {
        console.log("no se pudo insertar");
      res.send(error);
    }
});

/**
 * Obtener los clientes
 */
router.get("/clientes", (req, res) => { 
    _controlador.listarClientes().then(respuestaDB => {
        let registros = respuestaDB.rows;
        console.log("registros " + registros.info);
        res.send({ ok: true, info: registros, mensaje: "Clientes consultados" });
      }).catch(error => {
        res.send(error);
      });
});

module.exports = router;